import { useState, useContext } from 'react'
import { UserContext } from './App'

export default function Form() {

  const { user, updateUser } = useContext(UserContext)

  const [data, setData] = useState(user)

  const handleChange = ({ target }) => {
    setData(d => ({ ...d, [target.name]: target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First name: </label>
      <input id='firstName' name='firstName' value={data.firstName} onChange={handleChange} />
      <br />
      <label htmlFor='lastName'>Last name: </label>
      <input id='lastName' name='lastName' value={data.lastName} onChange={handleChange} />
      <br />
      <button>Submit</button>
    </form>
  )
}