type GreetProps = {
    name:string,
    messageCount?:number,
    isLogged: boolean
}

const Greet = (prop:GreetProps) => {
  const {messageCount = 0} = prop
  return (
    <div>
        {prop.isLogged ? <h1>Welcome {prop.name} You have {messageCount} unread messages </h1> : <h1>Welcome Guest</h1>}
    </div>
  )
}

export default Greet