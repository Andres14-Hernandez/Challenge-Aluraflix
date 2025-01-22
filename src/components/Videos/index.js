import Card from 'components/Card';
import style from './Videos.module.css';
import React, { useContext } from 'react';
import { VideoContext } from '../../context/videoContext';

function Videos(props){

    const color = props.data.primaryColor;
    const title = props.data.title;

    const { videos, deleteVideo } = useContext(VideoContext);
    const filteredVideos = videos.filter(video => video.category === title);

    return <>
        { filteredVideos.length > 0 &&
            <section className={style.videosContainer} >
                <h3 style={{backgroundColor: color}}> {title} </h3>
                <div className={style.videos}>
                    {filteredVideos.map((video, index) =>(
                        <Card key={index} data={video} color={color} deleteVideo={() => deleteVideo(video.id)}/>
                    ))}
                </div>
            </section>
        }
    </>
}

export default Videos;