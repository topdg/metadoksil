import React, { FC } from 'react'
import * as styles from './VideoBackground.module.scss';
import { VideoBackgroundProps } from './VideoBackground.types';

export const VideoBackground : FC<VideoBackgroundProps> = ( {poster, videos} ) => {
  console.log(videos)
  return (
    <div className={ styles.videoBackground}>
      <video className={ styles.videoBackground__video} width="250" controls poster="/section-1__bg-video__poster.jpg" >

        {
          videos.map(el => <source {...el} /> )
        }
      </video>
    </div>
  )
}