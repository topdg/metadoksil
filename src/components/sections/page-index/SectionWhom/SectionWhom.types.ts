import { GatsbyImageProps, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"

export interface ISectionWhomItem {
  title: string
  type: string
  icon: string
  img: IGatsbyImageData
}
export interface SectionWhomProps {
  title: string
  items: ISectionWhomItem[]
}