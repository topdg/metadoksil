import { WpSvgFile } from "../../../../utils/types/types"

interface SectionPharmacyItem {
  link: string
  img: WpSvgFile
}
export interface ISectionPharmacyProduct {
  title: string
  items: SectionPharmacyItem[]
}
export interface SectionPharmacyProps {
  subtitle: string
  products: ISectionPharmacyProduct[]
}