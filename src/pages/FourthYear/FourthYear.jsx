import React from 'react';
import {Link} from 'react-router-dom';

function FourthYear() {
    const courses = ["CS4001"];
    const list = courses.map((item) => 
        <li className="list-group-item">
        <Link to = {`/${item}`}>{item}</Link>
        </li>
    )
    return (
        <div>
            <ul className="list-group">
            {list}
            </ul>
        </div>
        
    );


};

export default FourthYear;