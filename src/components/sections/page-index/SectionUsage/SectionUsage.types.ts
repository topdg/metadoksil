import { WpSvgFile } from "../../../../utils/types/types"

interface ISectionUsageItem {
  title: string
  text: string
  icon1: WpSvgFile
  icon2: WpSvgFile
}
export interface SectionUsageProps {
  title: string
  items: ISectionUsageItem[]
  img: Queries.WpMediaItem
}