import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';


const PreviewCourses = (props) => {
    const [courses] = useCourses();

    return (
        <div>
            <h1 className="mt-5 ">Our Top Courses</h1>
            <Row xs={1} md={3} className="gy-5 gx-1 mx-5 my-2 d-flex justify-content-center align-items-center">
                {
                    courses.slice(3, 8).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default PreviewCourses;