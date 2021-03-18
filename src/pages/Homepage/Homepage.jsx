import React from 'react';
import CourseBox from '../../components/Course-Box/CourseBox';
import Image1 from '../../resources/image.jpg'

export const Homepage = () => {
    // const [testAPI, setTestAPI] = React.useState("")

    // React.useEffect(()=> {
    //     fetch("http://localhost:9000/testAPI")
    //         .then((res) => res.text())
    //         .then((res) => setTestAPI(res));
    // }, [])

    return (
      <div>
        <div className="container">
          <div class="row">
            <div class="col-sm">
              <CourseBox
                image={Image1}
                route="/first"
                title="First Year Courses"
              />
            </div>
            <div class="col-sm">
              <CourseBox
                image={Image1}
                route="/second"
                title="Second Year Courses"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-sm">
              <CourseBox
                image={Image1}
                route="/third"
                title="Third Year Courses"
              />
            </div>
            <div class="col-sm">
              <CourseBox
                image={Image1}
                route="/fourth"
                title="Fourth Year Courses"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Homepage;