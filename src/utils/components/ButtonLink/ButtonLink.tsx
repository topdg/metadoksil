import React, { FC, MouseEventHandler } from 'react'
import { cls } from '../../utils'
import { ButtonLinkProps } from './ButtonLink.types'

export const ButtonLink : FC<ButtonLinkProps> = ({ className, href, attributes, children, target = false }) => {

  return (
    target 
      ?
      <a className={cls('buttonLink', className)} target="_blank" href={href} {...attributes}>
        { children }
      </a>
      :
      <a className={cls('buttonLink', className)} href={href} {...attributes}>
        { children }
      </a>
  )
}
