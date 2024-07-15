import React from "react";

type Environment = {
    name: string;
    status: 'development' | 'production';
}
type ChildComponentProps = {
    setEnvironment:React.Dispatch<React.SetStateAction<Environment>>
}
const ChildComponent = ({setEnvironment}:ChildComponentProps) => {
    const handleClick = ()=>{
        setEnvironment((prevEnvironment)=>({
            ...prevEnvironment,
            status:prevEnvironment.status === 'development'?'production' : 'development',
        }))
    }
  return (
    <button onClick={handleClick}>Toggle Status</button>
  )
}

export default ChildComponent


