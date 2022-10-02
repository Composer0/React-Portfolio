import React from 'react';
import OceanWater from '../../assets/mov/shortWater.mp4'
import BackgroundIMG from '../../assets/img/water.webp'

function BackgroundVideo() {
    return (
        <div>
        <video className="bg-video bg-video__content" playinline="true" autoPlay loop muted src={OceanWater} />
        <div><img class="full-bg-img" src={BackgroundIMG} alt="bg-img"/></div>
        </div>
    );
}

export default BackgroundVideo;