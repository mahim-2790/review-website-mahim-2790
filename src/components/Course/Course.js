import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const { name, description, image, rating, price, duration } = props.course;
    return (
        <div>
            <Col className="d-flex justify-content-center">
                <Card className="card-size">
                    <Card.Img variant="top" src={image} className="img-height" />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <p>Duration: {duration} months</p>
                            <h3>${price}</h3>
                            <Rating
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                initialRating={rating}
                                readonly
                            >
                            </Rating>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;