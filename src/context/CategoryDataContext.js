import React, { createContext, useContext } from "react";


export const useCategoryData = () => useContext(CategoryDataContext);
const CategoryDataContext = createContext();

export const CategoryDataProvider = ({ children }) => {
const dataVideos = [
    { 
        title: "Front-end", 
        primaryColor: "#6BD1FF" 
    },

    { 
        title: "Back-end", 
        primaryColor: "#00C86F" 
    },
    
    { 
        title: "Innovación y Gestión", 
        primaryColor: "#FFBA05" 
    },
];

return (
    <CategoryDataContext.Provider value={dataVideos}>
        {children}
    </CategoryDataContext.Provider>
);
};