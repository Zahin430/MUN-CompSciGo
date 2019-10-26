import React from 'react';
import {Link} from 'react-router-dom'
import './CourseBox.css';

function CourseBox(props) {
    return (
        <div className ="card m-2 rounded shadow ">
        <div className ="card-body">
            <img src= {props.image} class="card-img" alt="course" />
            <div className="card-img-overlay">
                <h5 className="card-title text-center">
                    <Link to = {props.route} style= {{textDecoration: 'none', color: 'white'}}>
                        {props.title}
                    </Link>
                </h5>
            </div>
        </div>
        </div>
    );
}



export default CourseBox;