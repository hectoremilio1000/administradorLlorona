import { createContext, useState, useEffect, useContext } from 'react';
import { Auth } from 'aws-amplify';

const AuthContext = createContext({});

const AuthContextProvider = ({ children}) => {
    const [user, setUser] = useState();
    

useEffect(() => {
    Auth.currentAuthenticatedUser({bypassCache:true}).then(setUser);

}, [])

    
    
    return (<AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>)
    

}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
