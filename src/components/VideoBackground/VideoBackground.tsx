import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react'
import * as styles from './VideoBackground.module.scss';
import { VideoBackgroundProps } from './VideoBackground.types';

export const VideoBackground : FC<VideoBackgroundProps> = ( {videos} ) => {

  return (
    <div className={ styles.videoBackground}>
      <div className={ styles.videoBackground__poster}>
        <StaticImage src="../../assets/images/section-1__bg-video__poster.jpg" objectFit="cover" alt="" />
      </div>
      <video className={ styles.videoBackground__video} loop autoPlay playsInline muted >
        {
          videos.map((el, i) => <source key={i} {...el} /> )
        }
      </video>
    </div>
  )
}