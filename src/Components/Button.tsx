import React from 'react'
import button,{ButtonVariantProps} from './buttonvariance'
type ButtonProps = ButtonVariantProps&{
    children:React.ReactNode
}
const Button:React.FC<ButtonProps> = ({size,color,children}) => {
  return (
    <button className={button({size,color})}>
      {children}
    </button>
  )
}

export default Button