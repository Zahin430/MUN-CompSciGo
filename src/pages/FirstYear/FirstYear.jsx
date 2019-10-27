import React from 'react';


import {
    Link,
    Route
  } from "react-router-dom";

import './FirstYear.css';
import CoursePage from '../../pages/CoursePage/CoursePage';

function FirstYear({ match }) { 
    console.log(match.path.id);
    console.log(match.url);
       
    const courses = [
        {
            "name": "Computer Science – An Introduction",
            "id": "CS1000"
        },
        {
            "name": "Introduction to Programming",
            "id": "CS1001"
        },
        {
            "name": "Introduction to Logic for Computer Scientists",
            "id": "CS1002"
        },
        {
            "name": "Foundations of Computing Systems",
            "id": "CS1003"
        },
        {
            "name": "Computing in the 20th Century and Beyond",
            "id": "CS1400"
        },
        {
            "name": "Computing at the Movies",
            "id": "CS1401"
        },
        {
            "name": "An Introduction to Programming for Scientific Computing",
            "id": "CS1510"
        },
        {
            "name": "Basic Computing and Information Technology ",
            "id": "CS1600"
        },
    ]


    const list = courses.map((item) => 
        <li className="list-group-item item">
            <Link to = {`${match.path}/${item.id}`} style ={{ textDecoration: 'none'}}>
                <div class="row">
                    <div class="col divider">
                        {item.name}
                    </div>
                    <div class="col">
                        {item.id}
                    </div>
                </div>
            </Link>
        </li>
    )


    return (
        <div className = "container">
        <ul className="list-group p-4">
        <h4>First Year Courses</h4>
            <div className= 'list-group-item'>
                <div class="row">
                <div class="col divider">
                    NAME 
                </div>
                <div class="col">
                    COURSE ID
                </div>
            </div>      
            </div>
            {list}
            </ul>

        <Route path = {`${match.path}/:id`} component = {CoursePage} />
        </div>
        
    );


};

export default FirstYear;