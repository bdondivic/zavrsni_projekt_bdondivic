import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { authActions } from '../store'
import './style.css'
import pb from '../lib/pocketbase'
import { useForm } from 'react-hook-form'

function Login() {
  const {register, handleSubmit, reset} = useForm()
  const history = useNavigate();
  const isLoggedIn = pb.authStore.isValid
  const [errorMessage, setErrorMessage] = useState('')

  async function login(data) {
    try{
      setErrorMessage('')
      console.log(data)
      const authData = await pb
      .collection('users')
      .authWithPassword(data.email, data.password)

      if (authData){
        history('/home')
        window.location.reload()
      }
    }
    catch (err){
      setErrorMessage("Krivi email ili lozinka")
      reset()
    }
  }

  return (
    <div>
        {/* <h1>Logged in: {isLoggedIn.toString()}</h1> */}
        <form onSubmit={handleSubmit(login)}>
            <Box  className='login'>
                <Typography variant="h4">Login</Typography>

                {errorMessage && <span className="error-message">{errorMessage}</span>}

                <input name='email' type='text' placeholder='Email...' {...register("email")} />

                <input name='password' type='password' placeholder='Lozinka...' {...register("password")} /> 

                <button type='submit' >Log in</ button>
            </Box>
        </form>
    </div>
  )
} 

export default Login;