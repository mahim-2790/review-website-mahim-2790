import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses';

const MyCourse = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        fetch('enrolledCourse.json')
            .then(res => res.json())
            .then(data => setEnrolledCourses(data))
    }, []);

    return (
        <div>
            <h1 className="mt-5">Ongoing Courses: {enrolledCourses.length}</h1>
            <Row xs={1} md={3} className="gy-5 gx-1 mx-5 my-2 d-flex justify-content-center align-items-center">
                {
                    enrolledCourses.map(course => <EnrolledCourses
                        key={course.id}
                        course={course}
                    ></EnrolledCourses>)
                }
            </Row>
        </div>
    );
};

export default MyCourse;