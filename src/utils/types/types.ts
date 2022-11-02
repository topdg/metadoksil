import React, { PropsWithChildren} from "react"

export interface ElementProps<Tag> extends PropsWithChildren {
  attributes?: React.HTMLAttributes<Tag>
  className?: string
}