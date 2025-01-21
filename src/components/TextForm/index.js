import styles from "./TextForm.module.css"

function TextForm(props){

    const send = (e)=>{ 
        props.setValue(e.target.value)
    }

    return(
        <div className={styles.textForm}>
            <label>{props.Label}</label>
            <input 
                type="text" 
                placeholder={props.InputText + "..."} 
                required={props.required}
                value={props.value}
                onChange={send}
            />
        </div>
    )
}

export default TextForm;