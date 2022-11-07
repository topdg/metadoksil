import { WpSvgFile } from "../../../../utils/types/types"

interface Section2Item {
  icon: WpSvgFile
  title: string
}

export interface Section2Props {
  items: Section2Item[]
}