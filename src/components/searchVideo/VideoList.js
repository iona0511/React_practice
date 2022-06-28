import React from "react";
import VideoItem from "./VideoItem";

const VideoList =({videos, onVideoSelect })=>{
   const renderList =  videos.map(video=>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
                                                    // 參數名稱  value
    })
    return(
        <div>{renderList}</div>
    );
}


export default VideoList;