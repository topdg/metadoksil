interface SectionProductsItem {
  url: string
  title: string
  img: Queries.WpMediaItem
}

export interface SectionProductsProps {
  title: string
  subtitle: string
  productsmain: SectionProductsItem[]
}