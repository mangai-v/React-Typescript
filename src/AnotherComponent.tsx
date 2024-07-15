import Button from "./Button"
type ButtonPropsWithoutRef = React.ComponentPropsWithoutRef<typeof Button>

const AnotherComponent = () => {
    const handleClick = () => {
        alert('Button Clicked')
    }
    const Buttonprops:ButtonPropsWithoutRef = {
        onclick:handleClick,
        label:'Click Me'
    }
  return (
    <Button {...Buttonprops}/>
  )
}

export default AnotherComponent

