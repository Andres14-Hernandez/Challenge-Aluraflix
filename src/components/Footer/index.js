import styles from "./Footer.module.css"
import img from "./DevHub-Logo.svg"

function Footer(){
    return (
        <footer className={styles.footer}>
            <img src={img} alt="Logo Aluraflix"/>
            <div className={styles.text}>
                <p>© 2025</p>
                <p>Andrés Hernández lópez</p>
            </div>
            
        </footer>
    );
}

export default Footer;