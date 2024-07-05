type Headingprops = {title:string}

const Heading = ({title}:Headingprops) => {
  return (
    <>
        <h3>{title}</h3>
    </>
  )
}

export default Heading