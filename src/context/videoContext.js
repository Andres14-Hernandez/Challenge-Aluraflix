import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      title: "Video asjfgboaiyfgbsyo",
      image: "https://s1.significados.com/foto/gato-rasgos-fi-sicos-1.jpg?class=article",
      url: "https://www.youtube.com/watch?v=3XviR7esUvo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      category: "Front-end",
    },

    {
      title: "Video asjfgboaiyfgbsyo",
      image: "https://www.bancofinandina.com/RS/build/img/finanblog/perro-labrador-blanco-feliz-sacando-la-lengua-y-saludando.webp",
      url: "https://www.youtube.com/watch?v=3XviR7esUvo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      category: "Back-end",
    },

    {
      title: "Video asjfgboaiyfgbsyo",
      image: "https://www.bancofinandina.com/RS/build/img/finanblog/perro-labrador-blanco-feliz-sacando-la-lengua-y-saludando.webp",
      url: "https://www.youtube.com/watch?v=3XviR7esUvo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      category: "Innovación y Gestión",
    },


   
    
  ]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
};