import React, { useState } from "react";
import { Button, Card, Form, Input, message } from "antd";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../graphql/mutations'



const { Item } = Form;

function CrearBotella() {
    const [name, setName] = useState("");
    
    const botellaDetails = {
        name:name,
    }

  const guardarProducto = async () => {
    try {
        await API.graphql(
          graphqlOperation(
           mutations.createProductosBotellas,
           {
              input: botellaDetails,
            },
          )
        );
      window.location.reload(false);
      message.success("Producto guardado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card title="Ingesa los datos para crear una Botella">
      <Item label="Nombre de la Botella">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre Botella"
          style={styles.input}
        />
      </Item>
      <Item>
        <Button type="primary" onClick={guardarProducto}>
          Guardar Botella
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

export default CrearBotella;
