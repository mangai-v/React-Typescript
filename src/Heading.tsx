type HeadingProps = {
    children: string;
}

const Heading = (prop:HeadingProps) => {
  return (
    <div>{prop.children}</div>
  )
}

export default Heading
