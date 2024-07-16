type personProp = {
  name:{
    first:string,
    last:string
  }
}

const Person = (prop:personProp) => {
  return (
    <div>
        <h5>{prop.name.first} {prop.name.last} </h5>
    </div>
  )
}

export default Person