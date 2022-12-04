import { Card, Divider, Typography } from 'antd';
import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
  
  if (hector[0] === "Reservaciones") {
    return (
      <Card>
        <Typography.Title level={5}>
          Recuerda de que si quieres ver la lista de reservas para el día de hoy
          debes abrir la app de Google calender
        </Typography.Title>

        <a
          href="https://calendar.google.com/calendar/u/0/r?tab=rc&pli=1"
          target="_blank"
          rel="noreferrer"
        >
          <Typography.Link>Google Calender</Typography.Link>
        </a>

        <Divider />

        <Typography.Title level={5}>
          Recuerda que si quieres ver el detalle de cada reserva tienes que ir
          al siguiente link
        </Typography.Title>
        <a
          href="https://calendly.com/app/scheduled_events/user/me"
          target="_blank"
          rel="noreferrer"
        >
          <Typography.Link>Detalles eventos</Typography.Link>
        </a>
      </Card>
    );
  }
     
}

export default Inicio