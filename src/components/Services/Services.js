import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Services = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h1 className="mt-5">Services We Provide</h1>
            <p>This are the master classes that are taken by the teachers from all over the world.</p>
            <Row xs={1} md={3} className="gy-5 gx-1 mx-5 my-4 p-3 d-flex justify-content-center align-items-center">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div >
    );
};

export default Services;