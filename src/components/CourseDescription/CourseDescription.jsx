import React from 'react';

function CourseDescription(props) {
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>        
        </div>
    );
}

export default CourseDescription;