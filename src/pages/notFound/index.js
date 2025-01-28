import styles from "./notFound.module.css"
import { Link } from "react-router-dom";


function NotFound(){
    return(
        <div className={styles.container}>
            <h1>404</h1>
            <p>¡Oops! La página que buscas no existe.</p>
            <Link to="/" className={styles.link}>
              Volver al inicio
            </Link>
        </div>
    )
}

export default NotFound