// import { fragment } from 'react'
import "./style.css"
import css from "./style.module.css"
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

  return (
    <>  
    <h1 className="bg-red-500 text-2xl">hello whats up</h1>
    </>
  )

//   const [username, setusername] = useState("")
//   const [email, setemail] = useState("")
//   const [password, setpassword] = useState("")
//   const [graduated, setgraduated] = useState(false)
//   const [gender, setgender] = useState("male")
//   const [option, setoption] = useState("option 2")
//   const [description, setdescription] = useState("hello")
//   const divstyle = {
//     backgroundColor: "gray",
//     height: "100vh",
//     width: "100%",
//   }

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log({ username, email, password, graduated, gender, description })
//   }
//   return (
//     <>
//       <div style={divstyle}>
//       <form onSubmit={submitHandler}>
//         <input className={css.input} onChange={(e) => setusername(e.target.value)} type="text" placeholder="username" value={username} name="username" /><br /><br />
//         <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="email" value={email} name="email" /><br /><br />
//         <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="password" value={password} name="password" /><br /><br />
//         <input type="checkbox" onChange={(e) => setgraduated(e.target.checked)} checked={graduated} /> Graduated <br /><br />
//         <input type="radio" name="gender" onChange={(e) => setgender(e.target.value)} value={"male"} checked={gender === "male" ? true : false} /> male
//         <input type="radio" name="gender" onChange={(e) => setgender(e.target.value)} value={"female"} checked={gender === "female" ? true : false} /> female  <br /><br />
//         <select value={option} onChange={(e) => setoption(e.target.value)}>
//           <option value="option 1">1</option>
//           <option value="option 2">2</option>
//           <option value="option 3">3</option>
//         </select><br /><br />
//         <textarea onChange={(e) => setdescription(e.target.value)} value={description}></textarea><br /><br />
//         <input style={{backgroundColor: "red", padding: "5px 10px"}} type="submit" value="submit" />
//       </form>
//       </div>
//     </>
//   )
}

export default App