import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class CourseDescription extends React.Component {
    constructor(props){
        super(props)
        console.log('Props')
        this.state = {
            rating: 5
        }
    }
    render() {
        const { rating } = this.state;

        return (
            <div className= 'container'>
    
                <div className="jumbotron mt-2">
                    <h2 className="h1-responsive">{this.props.title}</h2>
                    <p className="lead">{this.props.id}</p>
                    <hr className="my-2"/>
                    <p>{this.props.desc}</p>
                    <p> <em>Credit can be retained for only one course from the set(s) consisting of the course being described and the course(s) listed:</em> {this.props.CR}</p>
                    <p> <em>Laboratory Hours Per Week:</em> {this.props.LH}</p>
                </div>
                
                <p>
                Professors: {this.props.professors.map((item) => (
                    <span className="badge badge-primary mr-2">{item.name}</span>
                )
                )}
                </p>
                <h4>Reviews</h4>
                <span>
                <div className= "mb-2">Average Rating</div>
                <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span aria-labelledby="star" role="img">⭐</span>}
                starCount={rating}
                value={8}
              />
                </span>
                <h4>Student Reviews</h4>
                
            </div>
        );
    }

}

export default CourseDescription;