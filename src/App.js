import { createContext, useState } from 'react'
import Form from './Form'
import Data from './Data'

export const UserContext = createContext()

export default function App() {

  const [data, setData] = useState({ firstName: '', lastName: '' })

  const updateUser = (user) => {
    setData(user)
  }

  return (
    <UserContext.Provider value={{ user: data, updateUser }}>
      <Form />
      <Data />
    </UserContext.Provider>
  )
}
