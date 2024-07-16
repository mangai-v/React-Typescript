type StatusProp = {
    status:"loading"|"success"|'error'
}

const Status = (prop:StatusProp) => {
    let message 
    if(prop.status === "loading") {
        message = "Loading"
    } else if(prop.status === "success") {
        message = "Data fetched successfully"
    } else if (prop.status === "error") {
        message = "Error fetching data"
    }
  return (
    <div>Status - {message} </div>
  )
}

export default Status