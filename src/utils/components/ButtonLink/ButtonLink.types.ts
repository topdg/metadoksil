import { ElementProps } from "../../types/types";

export interface ButtonLinkProps extends ElementProps<HTMLLinkElement> {
  href: string
  target: boolean
}