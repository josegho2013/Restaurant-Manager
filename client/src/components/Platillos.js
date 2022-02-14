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
  const [total, setTotal] = useState(0);
  const{}

  const getApi = async () => {
    await axios.get(dataUrl).then((response) => {
      setData(response.data);
      console.log("response.data: ", response.data);
    });
  };

  useEffect(async () => {
    await getApi();
  }, []);

  const getTotal = (e, precio) => {
    const subTotal = (precio * e.target.value) + total;
    setTotal(subTotal);
    
    // setInput({
    //   ...input,
    //   [e.target.name]: e.target.value,
    // });

    console.log(" precio", precio);
    console.log(" e.target.value", e.target.value);
  };

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
                        <td>
                          <input
                            id={dato.id}
                            name="cantidad"
                            type="number"
                            min="0"
                            onChange={(e) => getTotal(e, dato.precio)}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          )}

          <div>
            <h1>Resumen de Pedido</h1>
            <div>{total}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Platillos;
