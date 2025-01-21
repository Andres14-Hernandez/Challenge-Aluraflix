import styles from './TextArea.module.css';

function TextArea(props){
    return(
        <div className={styles.textArea}>
            <label>{props.Label}</label>
            <textarea className={styles.text}
                id={props.Label}
                placeholder={props.InputText + "..."}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </div>
    )
}

export default TextArea;