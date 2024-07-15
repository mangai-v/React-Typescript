// import Counter from "./Components/Counter"
// import Heading from "./Components/Heading"
// import Section from "./Components/Section"

import AnotherComponent from "./AnotherComponent"
import Navbar from "./Components/Navbar"
import Greet from "./Greet"
import Parentcomponent from "./Parentcomponent"
import Person from "./Person"
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
        <Greet name={'Ponmangayarkkarasi'} messageCount={10} isLogged={false}/>
        <Person name={person}/>
    </>
  )
}

export default App
