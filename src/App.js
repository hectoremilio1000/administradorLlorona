import { Layout, Image } from "antd";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import SideMenu from "../src/components/SideMenu";
import AppRoutes from './components/AppRoutes';
import ProductContextProvider from './components/contexts/ProductContext';

const { Sider, Content, Footer } = Layout;

Amplify.configure(awsconfig);

function App() {
  return (
    <ProductContextProvider>
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
    </ProductContextProvider>
  );
}

export default withAuthenticator(App);
