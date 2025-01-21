import styles from "./Card.module.css"
import { MdDeleteForever } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card(props){

    const {title, image} = props.data;
    const {color} = props

    return (
        <div className={styles.card} style={{border: "solid 5px", color}}>
            <img src={image} alt={title} className={styles.img}/>
            <div className={styles.cardFooter} style={{borderTop: "solid 5px", color}}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.buttons}>
                    <FaExternalLinkAlt className={styles.button_1}/>
                    <MdDeleteForever className={styles.button_2}/>
                </div>

            </div>
        </div>
    )
}

export default Card;