import React,{useState} from 'react'
import {AppBar, Appbar, Box, Toolbar, Typography,Tab,Tabs} from '@mui/material'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import { authActions } from '../store'
import './style.css'
import pb from '../lib/pocketbase'
//import useLogout from '../hooks/useLogout'



axios.defaults.withCredentials=true;

const Pocetna = () => {
    const dispatch = useDispatch() 
    const isLoggedIn = pb.authStore.isValid
    const [ dummy, setDummy ] = useState(0)
    

    function logout() {
        pb.authStore.clear()
        console.log(isLoggedIn.toString())
        setDummy(Math.random())
    }

    const [value, setvalue] = useState(0)
    return (
    <div>
        <nav className='pocetna'>
            <h2>BadReads</h2>
            <div>
                <Tabs 
                    textColor='inherit'
                    indicatorColor='default'
                    onChange={(e,val)=>setvalue(val)}
                    value={value}>
                    {/* {<Tab to="/home" LinkComponent={Link} label="Home"/>} */}
                    {!isLoggedIn && <>
                    <Tab to="/login" LinkComponent={Link} label="Log in"/>
                    <Tab to="/registration" LinkComponent={Link} label="Registriraj se"/> </>}
                    { isLoggedIn && <>
                    <Tab to="/home" LinkComponent={Link} label="Home"/>
                    <Tab to="/user" LinkComponent={Link} label="Profil"/>
                    <Tab onClick={logout} to="/login" LinkComponent={Link} label="Log out"/></>}
                </Tabs>
            </div>
        </nav>
    </div>
  )
}

export default Pocetna