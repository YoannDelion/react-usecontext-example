import { useContext } from 'react'
import { UserContext } from './App'

export default function Data() {

  const { user } = useContext(UserContext)

  return (
    <>
      <p>Data:</p>
      <p>{JSON.stringify(user)}</p>
    </>
  )
}