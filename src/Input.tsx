import { ChangeEvent } from "react"
type InputProp = {
    value:string,
    handleChange:(event:ChangeEvent<HTMLInputElement>)=>void
}
const Input = (prop:InputProp) => {
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target);
    }
  return (
   <input value={prop.value} onChange={handleInputChange}/>
  )
}

export default Input