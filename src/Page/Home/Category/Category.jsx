import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../Home/NewsCart/NewsCart';

const Category = () => {
    const categoryNews = useLoaderData();
    const {id}= useParams([])
    return (
        <div>
            { id && <h3>This category news: : {categoryNews.length}</h3>}
            {
                categoryNews.map(News => <NewsCart key={News._id} News={News}></NewsCart>)
            }
        </div>
    );
};

export default Category;