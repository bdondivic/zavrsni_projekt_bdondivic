import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pocetna from './components/Pocetna'
import Login from './components/Login'
import Home from './components/Home'
import User from './components/User'
import Registration from './components/Registration'
import {useSelector} from "react-redux"
import pb from './lib/pocketbase'


function App() {
  const isLoggedIn = pb.authStore.isValid
  
  console.log(isLoggedIn.toString())

  // useEffect( () => {
  //   axios.get("http://localhost:3001/api/users")
  //   .then(res => postaviUser(res.data))
  // }, [])
   
  // const noviUser = (e) => {
  //   e.preventDefault()
  //   console.log('Klik', e.target)
  //   const noviObjekt = {
  //   username: "A",
  //   email: "B",
  //   pass: "C"
  //   }
  //   axios
  //   .post('http://localhost:3001/poruke', noviObjekt)
  //   .then(response => {
  //   postaviUser(poruke.concat(res.data))
  //   postaviUnos('')
  //   })
  //  }
   
  return (
    <React.Fragment>
  <header>
    <Pocetna>

    </Pocetna>
  </header>
<main>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/registration" element={<Registration/>}/>
  <Route path="/home"element={<Home/>}/>
  { isLoggedIn && <Route path="/user"element={<User/>}/> }
</Routes>
</main>
</React.Fragment>

  )
  
}


export default App