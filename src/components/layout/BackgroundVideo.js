import React from 'react';
import OceanWater from '../../assets/mov/Clear ocean water.mp4'

function BackgroundVideo() {
    return (
        <div>
        <video className="bg-video bg-video__content" playinline="true" autoPlay loop muted src={OceanWater} />
        </div>
    );
}

export default BackgroundVideo;