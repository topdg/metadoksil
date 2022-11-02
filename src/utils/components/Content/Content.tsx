import React, { FC } from 'react'
import { ElementProps } from '../../types/types'
import { cls } from '../../utils'

import * as styles from './Content.module.scss'

export const Content : FC<ElementProps<HTMLDivElement>> = ({className, attributes, children}) => {
  return (
    <main id="page-content" className={cls('page-content', className)} {...attributes}>
      {children}
    </main>
  )
}
