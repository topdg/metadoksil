import { ElementProps } from "../../types/types"

export interface ButtonProps extends ElementProps<HTMLButtonElement> {
  handlerClick: () => void
}