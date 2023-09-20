import { Box, Button, TextField, Typography, Tabs } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import pb from '../lib/pocketbase'
import { useForm } from 'react-hook-form'


const Registration = () => {
    const history = useNavigate()
    const { register, handleSubmit } = useForm()

    async function registration(data) {
        try{
            data.passwordConfirm = data.password
            console.log(data)
            const record = await pb
            .collection('users')
            .create(data)
            .then(()=>history("/login"))
        }
        catch (err){
          console.log(err)     
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit(registration)}>
            <Box  className='login'>
                <Typography variant="h4">Registracija</Typography>

                <input name='username' type='text' placeholder='Username...' {...register("username")}/>

                <input name='email' type='text' placeholder='Email...' {...register("email")}/>

                <input name='password' type='password' placeholder='Lozinka...' {...register("password")}/> 

                <button type='submit' >Registriraj se</button>
            </Box>
        </form>
    </div>
)}

export default Registration



