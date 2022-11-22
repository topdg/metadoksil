interface SectionPharmacyItem {
  link: string
  img: Queries.WpMediaItem
}
export interface ISectionPharmacyProduct {
  title: string
  items: SectionPharmacyItem[]
}
export interface SectionPharmacyProps {
  subtitle: string
  products: ISectionPharmacyProduct[]
}