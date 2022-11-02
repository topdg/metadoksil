import React, { FC} from "react"
import { ElementProps } from "../../types/types"
import { cls } from "../../utils"

export const Container : FC<ElementProps<HTMLDivElement>> = ( {className = '', attributes, children} ) => {
  
  return (
    <div className={ cls("container", className) }>
      {children}
    </div>
  )
}