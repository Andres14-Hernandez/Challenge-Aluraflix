import styles from "./Banner.module.css"
import imgBanner from "./banner.png"
import Player from "./player.png"

function Banner() {
  return (
    <section className={styles.banner}>
      <img className={styles.bannerImg} src={imgBanner} alt="Banner" />
      <div className={styles.bannerText}>
        <h1>Front-end</h1>
        <p>Esta página esta elaborada con React</p>
      </div>
      <img className={styles.player} src={Player} alt="Banner" />

    </section>
  )
}

export default Banner;