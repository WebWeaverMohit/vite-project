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
  // showinfo = () => {
    
  // }
  return (
    <>
      <form action="">
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App