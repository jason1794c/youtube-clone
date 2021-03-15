import React, { useState, useEffect } from 'react';
import '../../css/RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    const [videos, setVideos] = useState([]);

    // Fetch the list of random video data
    useEffect(() => {
        fetch('/search')
            .then(response => response.json())
            .then(videos => setVideos(videos))
            .catch(err => console.log(err))
    }, [])
   
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {videos.map(video => (
                    <a
                        key={video.id}
                        href={`//youtube.com/watch?v=${video.id}`}
                        rel="noreferrer"
                        target="_blank"
                        className="recommendedVideos__link"
                    >
                        <VideoCard
                            title={video.title}
                            views={video.viewCount}
                            timestamp={video.uploadDate}
                            channelImage={video.thumbnails[1] ? video.thumbnails[1].url : 'https://i.stack.imgur.com/34AD2.jpg'}
                            channel={video.channel ? video.channel.name : ''}
                            image={video.thumbnails[0].url}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default RecommendedVideos

