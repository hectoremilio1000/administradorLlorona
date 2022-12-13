import React, { useState } from "react";
import { Button, Card, Form, Input, message } from "antd";
import { DataStore } from "aws-amplify";
import { CERVEZAARTESANAL } from "../../../../models";

const { Item } = Form;

function CrearCervezaArtesanal()  {
  const [name, setName] = useState("");

  const guardarProducto = async () => {
    try {
       await DataStore.save(
         new CERVEZAARTESANAL({
           nam: name,
         })
       );
       message.success("Producto guardado");
       window.location.reload(false);
      
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <Card title="Ingesa los datos para crear una Cerveza Artesanal">
      <Item label="Nombre Cerveza Artesanal">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre Cerveza Artesanal"
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

export default CrearCervezaArtesanal;
