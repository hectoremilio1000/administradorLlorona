import React, { useState } from "react";
import { Button, Card, Form, Input, message } from "antd";
import { DataStore } from "aws-amplify";
import { Products } from "../../../models";


 const { Item } = Form;

function Producto() {
  const [name, setName] = useState("");

  const guardarProducto = async () => {
    try {
       await DataStore.save(
         new Products({
           name:name
         })
       );
       window.location.reload(false);
       message.success("Producto guardado");
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <Card title="Ingesa los datos para crear un Producto">
      <Item label="Nombre Producto">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre Producto"
          style={styles.input}
        />
      </Item>
      <Item>
        <Button type="primary" onClick={guardarProducto}>
          Guardar Producto
        </Button>
      </Item>
    </Card>
  );
}

const styles = {
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "white",

    borderRadius: 5,
  },
};


export default Producto;
