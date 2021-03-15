import React, { useState, useContext, useEffect } from 'react';
import '../../css/SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow';
import { SearchContextProvider } from '../../context/SearchContext';

function SearchPage() {
    const [videos, setVideos]= useState([])
    const { search } = useContext(SearchContextProvider);
    
    useEffect(() => {
        fetch(`/search/${search}`, {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(videos => setVideos(videos))
    },[search])

    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            {videos.map(video => (
                <a
                    key={video.id}
                    href={`//youtube.com/watch?v=${video.id}`}
                    rel="noreferrer"
                    target="_blank"
                    className="searchPage__link"
                >
                    <VideoRow 
                        views={video.viewCount}
                        subs={Math.floor(Math.random()*5000000)}
                        description="Click the video to check it out!"
                        timestamp={video.uploadDate}
                        channel={video.channel ? video.channel.name : ''}
                        title={video.title}
                        image={video.thumbnails[0].url}
                    />
                </a>
            ))}
        </div>
    )
}

export default SearchPage
