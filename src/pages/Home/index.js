import Videos from "components/Videos";
import styles from "./index.module.css"
import Banner from "components/Banner";
import { useCategoryData } from "context";
import { useContext } from "react";
import { VideoContext } from '../../context/videoContext';


function Home(){

     const dataVideos = useCategoryData();
     const { videos } = useContext(VideoContext);
     console.log(videos);


    return(
        <>
        <Banner />
        <section className={styles.container}>
            {
                dataVideos.map((video, index) => (
                    <Videos 
                        key={index} 
                        data={video}
                    />
                ))}
        </section>
        </>        
    )
}

export default Home;


