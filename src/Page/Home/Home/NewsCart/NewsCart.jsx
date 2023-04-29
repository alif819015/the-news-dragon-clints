import moment from "moment";
import React from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCart = ({ News }) => {
  const { _id, title, author, image_url, details, rating, number, total_view } =
    News;
    // console.log(_id)
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          {" "}
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-3 flex-grow-1">
            <h4 className="mb-0">{author.name}</h4>
            <p>{moment(author?.published_date).format("YY-MM-D")}</p>
          </div>
          <div className="d-flex gap-2">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img className="my-4" variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}>
                  <span className="text-decoration-none">read More</span>
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="flex-grow-1">
            <div className="d-flex align-items-center gap-2">
            {/* <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            /> */}
            <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number || 0)} readOnly />
            <span className="pt-1">{rating?.number}</span>
            </div>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCart;
