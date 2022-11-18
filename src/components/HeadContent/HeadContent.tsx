import { Script } from 'gatsby'
import React, { FC } from 'react'
import { HeadContentProps } from './HeadContent.types'

export const HeadContent : FC<HeadContentProps> = ({title, description, scripts}) => {

  return (
    <>
      {
        title &&
        <title>{ title }</title>
      }
      {
        description &&
        <meta name="description" content={description} />
      }
      {
        scripts && scripts.map(el => el)
      }
    </>
  )
}
