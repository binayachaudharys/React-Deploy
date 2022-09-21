import { createContext, useState } from "react";

import PROD from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({ children }) => {
    const [products,setProducts] = useState(PROD);
    const value = { products };
         return (
            <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
         );
};