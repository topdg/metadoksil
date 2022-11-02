import React, { FC, MouseEventHandler } from "react"
import { cls } from "../../utils"
import { ButtonProps } from "./Button.types"



export const Button : FC<ButtonProps> = ( {className, handlerClick, attributes, children} ) => {
  
  return (
    <button 
      className={ cls('button', className) } 
      onClick={handlerClick} 
      {...attributes}
    >
      {children}
    </button>
  )
}