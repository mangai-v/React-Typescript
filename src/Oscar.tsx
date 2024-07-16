type oscarProp = {
    children:React.ReactNode
}

const Oscar = (prop:oscarProp) => {
  return (
    <div>{prop.children}</div>
  )
}

export default Oscar