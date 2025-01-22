import styles from "./Banner.module.css"
import imgBanner from "./banner.png"
import { VideoContext } from "context/videoContext"
import { useContext } from "react"
import { useCategoryData } from "context";

function Banner(){

  const { videos } = useContext(VideoContext);
  const dataVideos = useCategoryData();


  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  const category = dataVideos.find(cat => cat.title === randomVideo?.category);
  const primaryColor = category ? category.primaryColor : "#FFFFFF";

  return (
    <section className={styles.banner}>
      <img className={styles.bannerImg} src={imgBanner} alt="Banner" />
      <div className={styles.bannerText}>
        <h1 style={{backgroundColor: primaryColor}}>{randomVideo ? randomVideo.title : "Video no disponible"}</h1>
        <p>{randomVideo ? randomVideo.description : ""}</p>
      </div>
      <img 
        className={styles.player} 
        src={randomVideo ? randomVideo.image : ""} 
        alt={randomVideo ? randomVideo.title : "Imagen no disponible"} 
      />

    </section>
  )
}

export default Banner;