import { useState } from "react"
import ChildComponent from "./ChildComponent"

type Environment = {
    name: string;
    status: 'development' | 'production';
}
const Parentcomponent: React.FC = () => {
    const [environment,setEnvironment] = useState<Environment>({
        name: 'My App',
        status: 'development',
    })
  return (
    <div>
        <h1>{environment.name}</h1>
        <p>status-{environment.status}</p>
        <ChildComponent setEnvironment={setEnvironment}/>
    </div>
  )
}

export default Parentcomponent