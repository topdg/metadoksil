import { WpSvgFile } from "../../../../utils/types/types"

interface SectionShemaItem {
  title: string
  icon: WpSvgFile
}

export interface SectionShemaShemaProps {
  title: string
  items: SectionShemaItem[]
}

export interface SectionShemaProps {
  title: string
  subtitle: string
  text: string
  shemaTitle: string
  items: SectionShemaItem[]
}