import styles from "./Card.module.css"
import { MdDeleteForever } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card(props){

    const {title, image, url} = props.data;
    const {color, deleteVideo, id} = props

    const redirection = ()=>{
        window.open({url}, '_blank');
    }

    return (
        <div className={styles.card} style={{border: "solid 5px", color}}>
            <img className={styles.img} src={image} alt={title} />
            <div className={styles.cardFooter} style={{borderTop: "solid 5px", color}}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.buttons}>
                    <FaExternalLinkAlt className={styles.button_1} onClick={redirection}/>
                    <MdDeleteForever className={styles.button_2} onClick={()=>deleteVideo(id)}/>
                </div>

            </div>
        </div>
    )
}

export default Card;