const UserForm = () => {
  return (
    <form>
        <input name="name" placeholder="Name" required/>
        <input name="email" placeholder="Email" type="email" required/>
        <button type="submit">Create User</button>
    </form>
  )
}

export default UserForm