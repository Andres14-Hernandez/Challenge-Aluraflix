import React, { createContext, useState } from 'react';
import {v4 as uuid} from "uuid"


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([   
    
    {
      "id": uuid(),
      "title": "React.js Tutorial for Beginners",
      "image": "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      "description": "Comprehensive React.js tutorial for beginners, covering the basics of components, state, and props.",
      "category": "Front-end"
    },
    {
      "id": uuid(),
      "title": "Learn JavaScript - Full Course for Beginners",
      "image": "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      "description": "An in-depth JavaScript course covering syntax, variables, functions, and more for those starting out.",
      "category": "Back-end"
    },
    {
      "id": uuid(),
      "title": "Node.js Crash Course",
      "image": "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      "description": "Learn the basics of Node.js, from setting up your first server to using NPM and handling requests.",
      "category": "Back-end"
    },
    {
      "id": uuid(),
      "title": "How CSS Grid Works",
      "image": "https://i.ytimg.com/vi/7kVeCqQCxlk/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=7kVeCqQCxlk",
      "description": "A clear and concise guide to understanding CSS Grid and how it can help you create better layouts.",
      "category": "Front-end"
    },
    {
      "id": uuid(),
      "title": "What is UX Design?",
      "image": "https://i.ytimg.com/vi/Ovj4hFxko7c/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Ovj4hFxko7c",
      "description": "An introduction to UX design, focusing on user-centered design principles and the design process.",
      "category": "UX and UI Desing"
    }
    
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