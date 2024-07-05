import List from "./List"


const StringList = () => {
    const stringItems = ['Apple','Mango','Banana']
  return (
    <List items={stringItems} 
    renderItem={(item)=><span>{item}</span>}/>
  )
}

export default StringList