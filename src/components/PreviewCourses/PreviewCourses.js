import React from 'react';
import Rating from 'react-rating';
import { Col, Card, Row } from 'tailwind-react-ui'
import './PreviewCourses.css';

const PreviewCourses = (props) => {
    const { name, description, image, rating, price } = props.course;
    return (
        <div>
            {/* <div className="">
                <div className="rounded-md shadow-lg">
                    <div className="img-div">
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <h4>{description}</h4>
                        <p>{price}</p>
                        <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={rating}
                            readonly
                        ></Rating>
                    </div>
                </div>
            </div> */}
            <Row gutter>
                <Col>
                    <Card bg="grey" text="center" p="4" rounded="none">
                        <div className="rounded-md shadow-lg">
                            <div className="img-div">
                                <img src={image} alt="" />
                            </div>
                            <div>
                                <h2>{name}</h2>
                                <h4>{description}</h4>
                                <p>{price}</p>
                                <Rating
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    initialRating={rating}
                                    readonly
                                ></Rating>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PreviewCourses;