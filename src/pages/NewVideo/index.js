import { useCategoryData } from "context";
import FormVideo from "components/Form";
import styles from "./NewVideo.module.css";

function NewVideo(){    
    const dataVideos = useCategoryData();

    return (
        <section className={styles.formVideo}>
            <FormVideo 
                category={dataVideos.map((categories)=>categories.title)}
            />
        </section>
    )       
}

export default NewVideo;