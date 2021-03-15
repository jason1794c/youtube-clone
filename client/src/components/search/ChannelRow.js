import { Avatar } from '@material-ui/core'
import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../../css/ChannelRow.css';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar 
                className="channelRow__logo"
                src={image}
                alt={channel} 
            />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
