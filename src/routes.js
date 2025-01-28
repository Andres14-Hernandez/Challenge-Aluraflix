import BasePage from "pages/BasePage";
import Home from "pages/Home";
import NewVideo from "pages/NewVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryDataProvider } from "context";
import { VideoProvider } from "context/videoContext";
import NotFound from "pages/notFound";


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

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;