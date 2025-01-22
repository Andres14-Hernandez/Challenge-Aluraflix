import React, { createContext, useState } from 'react';
import {v4 as uuid} from "uuid"


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      title: "Video Front de prueva a ver si no se sale del contenedor, si se sale me pego un tiro",
      image: "https://s1.significados.com/foto/gato-rasgos-fi-sicos-1.jpg?class=article",
      url: "https://www.youtube.com/watch?v=3XviR7esUvo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      category: "Front-end",
    },

    {
      id: uuid(),
      title: "Video Back",
      image: "https://www.bancofinandina.com/RS/build/img/finanblog/perro-labrador-blanco-feliz-sacando-la-lengua-y-saludando.webp",
      url: "https://www.youtube.com/watch?v=3XviR7esUvo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      category: "Back-end",
    },

    {
      id: uuid(),
      title: "Video innovacion",
      image: "https://www.bancofinandina.com/RS/build/img/finanblog/perro-labrador-blanco-feliz-sacando-la-lengua-y-saludando.webp",
      url: "https://www.youtube.com/watch?v=3XviR7esUvo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      category: "Innovación y Gestión",
    },


   
    
  ]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};