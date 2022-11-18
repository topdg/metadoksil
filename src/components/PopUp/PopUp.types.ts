import { PropsWithChildren } from "react"

export interface PopUpProps extends PropsWithChildren {
  className?: string
  contentClassName?: string
  active: boolean
  setActive: () => void
}