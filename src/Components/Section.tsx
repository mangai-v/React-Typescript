import { ReactNode } from "react"

type SectionProps = {
    title:string,
    children:ReactNode
}

const Section = ({children,title="My SubHeading"}:SectionProps) => {
  return (
    <>
        <h2>{title}</h2>
        <h2>{children}</h2>
    </>
  )
}

export default Section