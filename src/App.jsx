// import { fragment } from 'react'

import { useState } from "react"

// const App = () => {
//   const [username, setusername] = useState("john")

//   const changeusername = () => {
//     setusername("jane")
//   }
//   console.log(username)

//   return (
//     <>
//       <h1>{username}</h1>
//       <button onClick={changeusername}>change</button>
//     </>
//   )
// }

// const App = () => {
//   const [username, setusername] = useState("john")

//   const changeusername = (x) => {
//     setusername(x)
//   }
//   console.log(username)

//   return (
//     <>
//       <h1>{username}</h1>
//       <button onClick={() => changeusername("jane")}>change</button>
//     </>
//   )
// }

const App = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    console.log({username, email, password})
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=> setusername(e.target.value)} type="text" placeholder="username" value={username} name="username" /><br /><br />
        <input onChange={(e)=> setemail(e.target.value)} type="email" placeholder="email" value={email} name="email" /><br /><br />
        <input onChange={(e)=> setpassword(e.target.value)} type="password" placeholder="password" value={password} name="password" /><br /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App