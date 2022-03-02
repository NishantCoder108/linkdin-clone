import React, { useState } from 'react'
import "./Login.css"
function Login() {

    const [showSignUp ,setShowSignUp] = useState(false);
    const toggleSignup = () =>{
        setShowSignUp(!showSignUp)
    }
  return (
    <div className='login_page'>
    
    <form>
{!showSignUp ?(<>
        <input type='text' placeholder="Username"/>
        <input type='password' placeholder="Password"/>

         <button >Login as a User</button>
        <div>Don't have an account ? <span onClick={toggleSignup}>Sign Up</span></div></> ) : (<>
        <input type='text' placeholder="Username"/>
        <input type='password' placeholder="Password"/>

         <button onClick={toggleSignup}>Sign Up as User</button>
        <div>Already an account ? <span onClick={toggleSignup}>Log In</span></div></> )}
      

    </form>
    </div>
  )
}

export default Login