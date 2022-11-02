interface VideoBackgroundVideo{
  src: string
  type: string
}

export interface VideoBackgroundProps {
  poster: string
  videos: VideoBackgroundVideo[]
}