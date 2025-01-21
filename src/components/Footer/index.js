import styles from "./Footer.module.css"

function Footer(){
    return (
        <footer className={styles.footer}>
            <img src="img/Logo.png" alt="Logo Aluraflix"/>
            <div className={styles.text}>
                <p>© 2025 - All Rights Reserved</p>
                <p>Andrés Hernández lópez</p>
                <p>Alura Latam</p>
            </div>
            
        </footer>
    );
}

export default Footer;