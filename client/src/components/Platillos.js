import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const Platillos = () => {
  const dataUrl = "http://localhost:3000/platillo";

  const [data, setData] = useState([]);

  const getApi = async () => {
    await axios.get(dataUrl).then((response) => {
      setData(response.data);
      console.log("response.data: ", response.data);
    });
  };

  useEffect(async () => {
    await getApi();
  }, []);

  return (
    <div>
      <Container>
        <div>
          {data.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data?.map((dato) => {
                    return (
                      <tr key={dato.id}>
                        <td>{dato.id}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.precio}</td>
                        <td>{dato.categoria}</td>

                        <td></td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Platillos;
