import { Script } from 'gatsby'
import React, { FC } from 'react'
import { UtekaProps } from './Uteka.types'

export const Uteka : FC<UtekaProps> = ( { id } ) => {
  return (
    <div className=''>
      <Script>
        {`
          var script = document.createElement('script')
          script.src = 'https://cdn.uteka.ru/static/widgets/widget.simple.compiled.js?l=' + Date.now()
          script.async = true
        
          document.head.appendChild(script)
        `
        }
      </Script>
    </div>
  )
}
