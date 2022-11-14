import { Card } from 'antd';
import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext';


function Inicio() {

  const { user } = useAuthContext();
 
  
  console.log(user);

  let hector = user?.signInUserSession?.idToken?.payload["cognito:groups"];

  if (hector === undefined)
    return (
      <Card>
        <p className="text-lowercase">
          Hola {user?.attributes?.email} no eres Admin, por favor cierra
          sesión y regresa a inicio.
        </p>
      </Card>
    );
  
  if (hector[0] === "Admin") {
     return (
       <div>
         Por favor <b>Admin</b> da click en el menú de la izquierda para navegar
         dentro del Administrador.
       </div>
     );
   }
     
}

export default Inicio