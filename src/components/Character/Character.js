import { Col, Card, Button } from "react-bootstrap"
import { PropTypes } from "prop-types";

const Character = ({ id, name, image, species, estado, cambiarEstado }) => {
    console.log(estado);
    return (
        <Col md={3} sm={16} className="character__separation" key={id}>
        <Card className="card__color">
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title className="card-title__color">{name}</Card.Title>
                    <Button onClick={() => cambiarEstado(true)}>Ver {id}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

Character.propTypes = {
    character: PropTypes.shape({
            created: PropTypes.string,
            gender: PropTypes.string,
            id: PropTypes.number,
            name: PropTypes.string,
            species: PropTypes.string,
            status:PropTypes.string,
        }).isRequired
}

export default Character