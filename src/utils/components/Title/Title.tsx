import React, { FC } from "react"
import { ElementProps } from "../../types/types"

export const Title : FC<ElementProps<HTMLHeadingElement>> = ( {className = '', children, attributes} ) => {
  
  return (
    <h2 className={`title ` + className} {...attributes}>
      {children}
    </h2>
  )
}