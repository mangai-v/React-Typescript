type GreetProps = {
    name:string,
    messageCount:number,
    isLogged: boolean
}

const Greet = (prop:GreetProps) => {
  return (
    <div>
        {prop.isLogged ? <h1>Welcome {prop.name} You have {prop.messageCount} unread messages </h1> : <h1>Welcome Guest</h1>}
    </div>
  )
}

export default Greet