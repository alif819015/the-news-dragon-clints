import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div>
            <h2>Trams and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam itaque sed quis quos iure officiis vel debitis aspernatur. Asperiores eum soluta doloremque? Fuga itaque veritatis quasi cupiditate at iste sint error necessitatibus atque rerum ab eius, qui illo sunt?</p>
            <p>Go Back to<Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Trams;