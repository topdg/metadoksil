import React, { FC } from 'react'
import * as styles from './VideoBackground.module.scss';
import { VideoBackgroundProps } from './VideoBackground.types';

export const VideoBackground : FC<VideoBackgroundProps> = ( {poster, videos} ) => {

  return (
    <div className={ styles.videoBackground}>
      <video className={ styles.videoBackground__video} loop autoPlay playsInline muted poster="/section-1__bg-video__poster.jpg" >
        {
          videos.map((el, i) => <source key={i} {...el} /> )
        }
      </video>
    </div>
  )
}