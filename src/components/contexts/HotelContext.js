import { createContext, useState, useEffect, useContext } from 'react';
import { DataStore } from 'aws-amplify';
import { Hotel } from '../../models';

const HotelContext = createContext({});

const HotelContextProvider = ({ children }) => {
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        DataStore.query(Hotel).then(setHotel);
    }, [])

    return (
        <HotelContext.Provider value={{ hotel }}>
            {children}
        </HotelContext.Provider>
    )

};

export default HotelContextProvider;

export const useHotelContext = () => useContext(HotelContext);