interface Section2Icon {
  sourceUrl: string
}

interface Section2Item {
  icon: Section2Icon
  title: string
}

export interface Section2Props {
  items: Section2Item[]
}