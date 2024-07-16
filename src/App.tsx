// import Counter from "./Components/Counter"
// import Heading from "./Components/Heading"
// import Section from "./Components/Section"

import AnotherComponent from "./AnotherComponent"
import ClickButton from "./ClickButton"
import Navbar from "./Components/Navbar"
import Container from "./Container"
import Greet from "./Greet"
import Heading from "./Heading"
import Input from "./Input"
import Oscar from "./Oscar"
import Parentcomponent from "./Parentcomponent"
import Person from "./Person"

import Status from "./Status"
import StringList from "./StringList"
// import Button from "./Components/Button"
// import { useState } from "react"
function App() {
  // const [count,setCount] = useState(1)
  const person = {
    first:'Mangai',
    last:'Velusamy'
  }
  return (
    <>
      {/* <Heading title={"Hello!!!"}/>
      <Section title={"Different title"}>This is section content</Section>
      <Counter setCount={setCount}>count is {count}</Counter> */}
      <Navbar/>
        {/* <Button size='small' color='secondary'>Small Secondary Button</Button> */}
        <AnotherComponent/>
        <StringList/>
        <Parentcomponent/>
        <Greet name={'Ponmangayarkkarasi'}  isLogged={true}/>
        <Person name={person}/>
        
        <Status status={"error"}/>
        <Heading>Placeholder</Heading>
        <Oscar>
          <Heading>Oscar goes to Leo</Heading>
        </Oscar>
        <ClickButton handleClick = {(event,id)=>console.log(event,id)
        }/>
        <Input value='' handleChange={(event)=>console.log(event)
        }/>
        {/* <Container styles={{border:'1px solid black'}}/> */}
        <Container styles={{border:'1px solid black'}}/>
    </>
  )
}

export default App
