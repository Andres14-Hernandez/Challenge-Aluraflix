import Videos from "components/Videos";
import styles from "./index.module.css"
import Banner from "components/Banner";
import { useCategoryData } from "context";


function Home(){

     const dataVideos = useCategoryData();

    return(
        <>
        <Banner />
        <section className={styles.container}>
            {
                dataVideos.map((video, index) => (
                    <Videos key={index} data={video}/>
                ))}
        </section>
        </>        
    )
}

export default Home;


