import BasePage from "pages/BasePage";
import Home from "pages/Home";
import NewVideo from "pages/NewVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryDataProvider } from "context";
import { VideoProvider } from "context/videoContext";


function AppRoutes(){
    return(        
        <BrowserRouter>
            <Routes>                    
                <Route path="/" element={<BasePage />}>
                    <Route index element={ 
                        <CategoryDataProvider>
                            <VideoProvider>
                                <Home /> 
                            </VideoProvider>
                        </CategoryDataProvider> 
                    }/>

                    <Route path="/new-video" element={
                        <CategoryDataProvider>
                            <VideoProvider>
                                <NewVideo />
                            </VideoProvider>
                        </CategoryDataProvider>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;