import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) =>{
    const {movieList} = props;
    return(
        <div>
            <ul>
                {
                    movieList.map(movie =>{
                        return <VideoListItem key={movie.id} movie={movie} callback={receivedCallBack}/>
                    })
                }
            </ul>
        </div>
    );
    function receivedCallBack(movie){
        console.log("Parent: ", movie);
        props.callback(movie)

    }
}

export default VideoList;