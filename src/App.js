import { Layout, Image } from "antd";
import { Amplify, I18n } from "aws-amplify";
import awsconfig from "./aws-exports";
import { translations } from "@aws-amplify/ui-react";

import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import SideMenu from "../src/components/SideMenu";
import AppRoutes from './components/AppRoutes';
import ProductContextProvider from './components/contexts/ProductContext';
import HotelContextProvider from "./components/contexts/HotelContext";

I18n.putVocabularies(translations);
I18n.setLanguage("es");
I18n.putVocabularies({
  es: {
    Email: "Correo",
    "Sign In": "Iniciar Sesión",
    "Sign Up": "Regístrate",
    "Create Account": "Regístrate",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Se envió el código de confirmación al email proporcionado.",
    "It may take a minute to arrive.": "Puede tardar unos minutos en llegar.",
    "Invalid verification code provided, please try again.":
      "Código de verificación inválido, por favor intenta de nuevo.",
    "Send code": "Enviar código",
    "Cannot reset password for the user as there is no registered/verified email or phone_number":
      "No se puede reestablecer la contraseña para el usuario ya que no se encuentra registrado/ el email no está verificado o tampoco el número de teléfono.",
  },
});

const { Sider, Content, Footer } = Layout;

Amplify.configure(awsconfig);


function App() {
  return (
    <Authenticator loginMechanisms={["email"]}>
      <ProductContextProvider>
        <HotelContextProvider>
          <Layout>
            <Sider style={{ height: "100vh", backgroundColor: "white" }}>
              <Image
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/cantina/logo/logo_page_alta.png"
                preview={false}
              />
              <SideMenu />
            </Sider>
            <Layout>
              <Content>
                <AppRoutes />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                La Llorona Cantina Dashboard ©2022
              </Footer>
            </Layout>
          </Layout>
        </HotelContextProvider>
      </ProductContextProvider>
    </Authenticator>
  );
}

export default App;
