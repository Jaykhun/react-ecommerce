import clsx from 'clsx'
import { FC, ReactNode } from "react"
import './Button.scss'

interface IButton {
  disabled?: boolean,
  hoverEffect?: boolean,
  children: ReactNode
}

const Button: FC<IButton> = ({ disabled, children, hoverEffect }) => {
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