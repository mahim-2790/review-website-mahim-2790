import React, { useEffect, useState } from 'react';
import cover from '../../images/cover.png';
import PreviewCourses from '../PreviewCourses/PreviewCourses';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./headerCourse.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);


    return (
        <div>
            <header>
                <img src={cover} alt="" />
            </header>
            <section>
                {
                    courses.map(course => <PreviewCourses
                        key={course.id}
                        course={course}
                    ></PreviewCourses>)
                }
            </section>
        </div>
    );
};

export default Home;