import React from 'react'
import { useState } from 'react'
import Connexion from '../components/Connexion/Connexion'
import Register from '../components/Register/Register'
import './SignIn.css'
const SignIn = () => {
  const [registerData, setRegisterData] = useState([]);
  const [connexionData, setConnexionData] = useState([]);
  const [state, setState] = useState(false)
  const handleClickRegister = () => {
    setState(false)
  }
  const handleClickConnexion = () => {
    setState(true)
  }
  return (
  
    <div className='divSignIn'>
      <div className='signInTitle'>
        <h1 className='signInRegisterTitle' onClick={handleClickRegister}>Register</h1>
        <h1 className='signInConnexionTitle' onClick={handleClickConnexion}>Connexion</h1>
      </div>
      <div>
        {!state ?<Register className='signInRegisterForm' registerData={setRegisterData}/> : 
        <Connexion className='signInConnexionForm' connexionData={setConnexionData}/>}
        
      </div>
    </div>
  )
}

export default SignIn