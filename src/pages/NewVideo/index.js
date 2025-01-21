import { useState } from "react";
import { useCategoryData } from "context";
import FormVideo from "components/Form";
import styles from "./NewVideo.module.css";

function NewVideo(){    

    // ELIMINAR
    const [newVideo, setNewVideo] = useState([])    

    const recordVideo = (video)=>{
        console.log("Nuevo Video",video);
        setNewVideo([...newVideo, video]);
    } 

    
    const dataVideos = useCategoryData();

    return (
        <section className={styles.formVideo}>
            <FormVideo 
                category={dataVideos.map((categories)=>categories.title)}
                recordVideo={recordVideo} /* ELIMINAR */           
            />
        </section>
    )       

}

export default NewVideo;