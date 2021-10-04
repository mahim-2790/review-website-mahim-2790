import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, ProgressBar } from 'react-bootstrap';
import Rating from 'react-rating';

const EnrolledCourses = (props) => {
    const avatar = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const clock = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const { name, description, image, rating, price, duration, author, student, completed } = props.course;
    return (
        <div>
            <Col className="d-flex justify-content-center">
                <Card className="card-size">
                    <Card.Img variant="top" src={image} className="img-height" />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <h5>By: {author}</h5>
                            <h3>${price}</h3>
                            <Rating
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                initialRating={rating}
                                readonly
                            >
                            </Rating><br />
                            <ProgressBar now={completed} className="my-3"></ProgressBar>
                        </Card.Text>
                        <button className="enrl-btn">Continue Class</button>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <small>{avatar} {student}</small>
                            <small>{clock} {duration}Months</small>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default EnrolledCourses;