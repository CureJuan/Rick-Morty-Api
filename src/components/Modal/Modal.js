import { Card } from "react-bootstrap";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Modal = ({ estado, cambiarEstado, children, image }) => {
    console.log(estado)
    return ( 
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Card.Img variant="top" src={image} />
            </EncabezadoModal>
            <Card.Body>
              <Card.Title>Nombre:</Card.Title>
              <Card.Text>
                Especie:
                <br />
                Estado:
                <br />
                Creado:
              </Card.Text>
            </Card.Body>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <b>X</b>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  aling-items: center;
  justify-content: center;
`;
const ContenedorModal = styled.div`
  width: 500px;
  height: 700px;
  background: yellow;
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;
const EncabezadoModal = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h1 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  cursor: pointer;
  background: none;
  border-radius: 5px;
  color: red;
  transition: 0.3s ease all;

  &:hover {
    backgound: #f2f2f2;
  }
`;

Modal.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
