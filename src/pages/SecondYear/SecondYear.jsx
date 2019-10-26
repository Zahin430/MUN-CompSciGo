import React from 'react';
import {Link} from 'react-router-dom';


function SecondYear() {
    const courses = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2100", "2300", "2500", "2510", "2718"];
    const list = courses.map((item) => 
        <li className="list-group-item">
            <Link to = {`/${item}`}>
            <div class="row">
                <div class="col">
                
                </div>
                <div class="col">
                {item}
                </div>
            </div>

            </Link>
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

export default SecondYear;