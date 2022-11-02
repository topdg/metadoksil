import React, { FC } from "react"
import { ElementProps } from "../../types/types"
import { cls } from "../../utils"

export const Section : FC<ElementProps<HTMLDivElement>> = ( {className, attributes, children} ) => {
  
  return (
    <section className={cls('section', className)} {...attributes}>
      {children}
    </section>
  )
}