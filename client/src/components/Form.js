import React, { useState } from "react";
import Platillos from "./Platillos";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const Form = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  const openModal = () => {
    setAbrirModal(true);
  };
  const closeModal = () => {
    setAbrirModal(false);
  };

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button color="success" onClick={openModal}>
            {" "}
            Iniciar Orden
          </Button>

          <Platillos/>
        </div>
      </div>
      <Modal isOpen={abrirModal} style={modalStyles}>
        <ModalHeader> Crear Orden</ModalHeader>
        <FormGroup>
          <Label form="mesa">Mesa</Label>
          <Input type="number" name="mesa" />
        </FormGroup>
        <FormGroup>
          <Label form="hora">Hora</Label>
          <Input type="time" name="hora" placeholder="ingrese hora" />
        </FormGroup>
        <ModalFooter>
          <Button color="danger" onClick={closeModal}>
            {" "}
            Cerrar
          </Button>
          <Button color="success">Crear Orden</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Form;
