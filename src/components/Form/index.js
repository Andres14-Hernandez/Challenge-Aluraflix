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
        let sendData ={
            title,
            image,
            url,
            description,
            category
        }
        addVideo(sendData);
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
                <h2 className={styles.title}>NEW VIDEO</h2>

                <TextForm 
                    Label="Title" 
                    InputText="Name of the video" 
                    required={true}
                    value={title}
                    setValue={setTitle}
                />
                <TextForm 
                    Label="Image" 
                    InputText="Image URL" 
                    required={true}
                    value={image}
                    setValue={setImage}
                />
                <TextForm 
                    Label="URL video" 
                    InputText="Video URL" 
                    required={true}
                    value={url}
                    setValue={setUrl}
                />

                <TextArea
                    Label="Description"
                    InputText="Description of the video"
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
                        Add Video
                    </Button>
                    <Button onClick={handleClear}>
                        Clean Form                       
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default FormVideo;