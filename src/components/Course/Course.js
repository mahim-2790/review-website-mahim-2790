import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css';

const Course = (props) => {
    const avatar = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const clock = <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>

    const { name, description, image, rating, price, duration, author, student } = props.course;
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
                        </Card.Text>
                        <button className="enrl-btn">Enroll</button>
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

export default Course;