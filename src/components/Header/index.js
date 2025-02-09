import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "./DevHub-Logo.svg"

function Header(){
    return(
        <header className={styles.header}>
            <img src={img} alt="Logo" className={styles.logo}/>
            <ul className={styles.list}>
                <li> <Link to="/" className={styles.link}>Home</Link> </li>
                <li> <Link to="/new-video" className={styles.link}>New Video</Link> </li>

            </ul>

        </header>
    )
}

export default Header;