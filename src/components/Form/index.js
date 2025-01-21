import { useState, useContext } from 'react';
import TextForm from 'components/TextForm';
import styles from './FormVideo.module.css';
import OptionList from 'components/OptionList';
import Button from './Button';
import TextArea from 'components/TextArea';
import { VideoContext } from 'context/videoContext';

function FormVideo(props){

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("")

    const { addVideo } = useContext(VideoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Manejar envio: ");
        let sendData ={
            title,
            image,
            url,
            description,
            category
        }
        addVideo(sendData);
        props.recordVideo(sendData); /* ELIMINAR */
    }

    const handleClear = () => {
        setTitle("");
        setImage("");
        setUrl("");
        setDescription("");
        setCategory("");
    };

    return(
        <section className={styles.formVideo}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.title}>NUEVO VIDEO</h2>

                <TextForm 
                    Label="Titulo" 
                    InputText="Ingresa el titulo del video" 
                    required={true}
                    value={title}
                    setValue={setTitle}
                />
                <TextForm 
                    Label="Imagen" 
                    InputText="Ingresa la URL de la imagen" 
                    required={true}
                    value={image}
                    setValue={setImage}
                />
                <TextForm 
                    Label="URL" 
                    InputText="Ingresa la URL del video" 
                    required={true}
                    value={url}
                    setValue={setUrl}
                />

                <TextArea
                    Label="Descripción"
                    InputText="Ingresa la descripción del video"
                    required={true}
                    value={description}
                    setValue={setDescription}
                />
                <OptionList
                    required={true}
                    value={category}
                    setCategories={setCategory}
                    categories={props.category}
                />

                <div className={styles.buttons}>
                    <Button>
                        Agregar
                    </Button>
                    <Button onClick={handleClear}>
                        Limpiar                        
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default FormVideo;