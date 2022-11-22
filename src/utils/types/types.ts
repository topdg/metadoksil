import React, { PropsWithChildren} from "react"

export interface ElementProps<Tag> extends PropsWithChildren {
  attributes?: React.HTMLAttributes<Tag>
  className?: string
}

export interface WpSvgFile extends Queries.WpMediaItem {
  staticPath?: string
}