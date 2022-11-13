import { createContext, useState, useEffect, useContext } from "react";
import { Auth, DataStore } from 'aws-amplify';
import { Products } from "../../models";

const ProductContext = createContext({});

const ProductContextProvider = ({ children }) => {
    const [productos, setProducts] = useState([]);


    useEffect(() => {
        DataStore.query(Products).then(setProducts);
    }, [])

    return (
        <ProductContext.Provider value={{ productos }}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductContextProvider;

export const useProductContext = ()=>useContext(ProductContext)