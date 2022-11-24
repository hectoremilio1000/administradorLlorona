import { createContext, useState, useEffect, useContext } from "react";
import { API, Auth, DataStore, graphqlOperation } from "aws-amplify";
import { listProductosBotellas } from "../../graphql/queries";


const BotellasContext = createContext({});

const BotellasContextProvider = ({ children }) => {
  const [botellas, setBotellas] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listProductosBotellas)).then(setBotellas);
  }, []);

  return (
    <BotellasContext.Provider value={{ botellas }}>
      {children}
    </BotellasContext.Provider>
  );
};

export default BotellasContextProvider;

export const useBotellasContext = () => useContext(BotellasContext);
