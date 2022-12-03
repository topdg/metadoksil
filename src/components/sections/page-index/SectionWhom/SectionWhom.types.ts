import { WpSvgFile } from "../../../../utils/types/types"

interface ISectionWhomItem {
  title: string
  icon: WpSvgFile
  img: Queries.WpMediaItem
}
export interface SectionWhomProps {
  title: string
  items: ISectionWhomItem[]
}