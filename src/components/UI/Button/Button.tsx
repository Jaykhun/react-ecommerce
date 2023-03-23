import clsx from 'clsx'
import { ReactNode } from "react"
import './Button.scss'

interface IButton {
  disabled?: boolean,
  hoverEffect?: boolean,
  children: ReactNode
}

const Button = ({ disabled, children, hoverEffect }: IButton) => {
  return (
    <button disabled={disabled} className=
      {clsx('btn r-btn', {
        'disabled': disabled,
        'w-opacity': hoverEffect
      })}
    >
      {children}
    </button>
  )
}

export default Button