interface SectionUtekaItem {
  title: string
  img: Queries.WpMediaItem
}

export interface SectionUtekaProps {
  title: string
  subtitle: string
  productsmain: SectionUtekaItem[]
}