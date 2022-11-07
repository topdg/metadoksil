import React, { FC, MouseEventHandler } from 'react'
import { cls } from '../../utils'
import { ButtonLinkProps } from './ButtonLink.types'

export const ButtonLink : FC<ButtonLinkProps> = ({ className, href, children }) => {

  return (
    <a className={cls('buttonLink', className)} href={href}>
      { children }
    </a>
  )
}
