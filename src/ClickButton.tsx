type ButtonProps = {
    handleClick :(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

const ClickButton = (props:ButtonProps) => {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>ClickButton</button>
  )
}

export default ClickButton