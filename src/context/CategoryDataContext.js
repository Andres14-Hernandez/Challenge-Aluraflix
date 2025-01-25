import React, { createContext, useContext } from "react";
import {v4 as uuid} from "uuid"


export const useCategoryData = () => useContext(CategoryDataContext);
const CategoryDataContext = createContext();

export const CategoryDataProvider = ({ children }) => {
const dataVideos = [
    { 
        id: uuid(),
        title: "Front-end", 
        primaryColor: "#6BD1FF" 
    },

    {
        id: uuid(), 
        title: "Back-end", 
        primaryColor: "#00C86F" 
    },
    
    {
        id: uuid(), 
        title: "UX and UI Desing", 
        primaryColor: "#FFBA05" 
    },
];

return (
    <CategoryDataContext.Provider value={dataVideos}>
        {children}
    </CategoryDataContext.Provider>
);
};