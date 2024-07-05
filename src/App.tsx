// import Counter from "./Components/Counter"
// import Heading from "./Components/Heading"
// import Section from "./Components/Section"

import AnotherComponent from "./AnotherComponent"
import Navbar from "./Components/Navbar"
import Parentcomponent from "./Parentcomponent"

import StringList from "./StringList"
// import Button from "./Components/Button"

// import { useState } from "react"
function App() {
  // const [count,setCount] = useState(1)
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
    </>
  )
}

export default App
