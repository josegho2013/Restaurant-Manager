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
  const [platillos, setPlatillos] = useState([]);

  const getApi = async () => {
    await axios.get(dataUrl).then((response) => {
      setData(response.data);
      console.log("response.data: ", response.data);
    });
  };

  useEffect(async () => {
    await getApi();
  }, []);

  const getTotal = (e, precio, id) => {
    const subTotal = precio * e.target.value + total;
    let platos = platillos;

    if (platillos.length > 0) {
      let aux;
      platillos.map((item) => {
        console.log("ID: ", id);
        console.log("item.ID: ", item.id);

        if (id === item.id) {
          console.log("1.Entro");
          aux = item.id;
          arreglo[contador].cantidad = dato.cantidad;
        }
      });
    


      if (aux) {
        
      } else {
        platos.push({ id: id, precio: precio, cant: Number(e.target.value) });
      }
    } else {
      platos.push({ id: id, precio: precio, cant: Number(e.target.value) });
    }

    setPlatillos(platos);
    setTotal(subTotal);

    console.log(" platos", platos);
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
                            onChange={(e) => getTotal(e, dato.precio, dato.id)}
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
            <p>mesa:</p>
            <p>Hora:</p>
            <h3> Total:{total}$</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Platillos;
