interface BreadcrumbsItem {
  link?: string
  title: string
}

export interface BreadcrumbsProps {
  parents?: BreadcrumbsItem[]
  current: BreadcrumbsItem
}