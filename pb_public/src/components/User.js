import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Box, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import pb from '../lib/pocketbase'
import { useForm } from 'react-hook-form'


function User() {
    const [shownState, setShownState] = useState({
      favorites: false,
      readBooks: false,
      booksToRead: false,
    })
    const [faves, setFavorites] = useState([])
    const [read, setReadBooks] = useState([])
    const [toRead, setBooksToRead] = useState([])

    
    const [openDialog, setOpenDialog] = useState(false)

    const history = useNavigate()
    const isLoggedIn = pb.authStore.isValid
    const currentUser = pb.authStore.model

    const openDeleteDialog = () => {
      setOpenDialog(true)
    }
    const closeDeleteDialog = () => {
      setOpenDialog(false)
    }

    useEffect(() => {
      setLists()
      // console.log(faves)
      // console.log(read)
    }, [])

    async function setLists() {
      const faveBooks = []
      const readBooks = []
      const toReadBooks = []

      for (const bookId of currentUser.faves) {
        try {
          const book = await pb.collection('books').getFirstListItem(`id="${bookId}"`)
          faveBooks.push(book);
        } catch (error) {
          console.error('Error fetching book:', error);
          // Handle the error or missing data as needed
        }
      }
      for (const bookId of currentUser.read) {
        try {
          const book = await pb.collection('books').getFirstListItem(`id="${bookId}"`)
          readBooks.push(book);
        } catch (error) {
          console.error('Error fetching book:', error);
          // Handle the error or missing data as needed
        }
      }
      for (const bookId of currentUser.toRead) {
        try {
          const book = await pb.collection('books').getFirstListItem(`id="${bookId}"`)
          toReadBooks.push(book);
        } catch (error) {
          console.error('Error fetching book:', error);
          // Handle the error or missing data as needed
        }
      }


      setFavorites(faveBooks)
      setReadBooks(readBooks)
      setBooksToRead(toReadBooks)
    }

    const removeBook = async (book, list) => {
      if (list == "favoriti"){
        try {
          const post = await pb.collection('users').update(currentUser.id, {
            'faves-': book.id
          })
        }
        catch (error) {
          console.log(error)
        }
      }
      else if (list == "procitano"){
        try {
          const post = await pb.collection('users').update(currentUser.id, {
            'read-': book.id
          })
        }
        catch (error) {
          console.log(error)
        }
      }
      else if (list == "zaCitanje"){
        try {
          const post = await pb.collection('users').update(currentUser.id, {
            'toRead-': book.id
          })
        }
        catch (error) {
          console.log(error)
        }
      }
      setLists()
    }



    const displayList = (list, listName) => {
      if (list.length === 0) {
        console.log('Lista prazna')
        return <Typography variant="p">Lista je prazna</Typography>
      } else {
        console.log('Lista nije prazna')
        return list.map((book) => (
          <div key={book._id}>
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="subtitle1">{book.author}</Typography>
            <Typography variant="subtitle2">{book.year}</Typography>

            <Button onClick={() => removeBook(book, listName)}>Izbriši s liste</Button>
          </div>
        ))
      }
    }


    async function handleDelete() {
      try {
        await pb.collection('users')
        .delete(currentUser.id)
        .then(()=>history("/login"))
        closeDeleteDialog()
      } 
      catch (err) {
          console.log(err)
      }
    }

    return (
      <div className='user'>
        {isLoggedIn && <h1>Korisničko ime: {pb.authStore.model.username}</h1>}
        {isLoggedIn && <p>Email: {pb.authStore.model.email}</p>}  
  
        <div>
          <h3>Favoriti</h3>
          <button onClick={() => setShownState({ ...shownState, favorites: !shownState.favorites })}>
            {shownState.favorites ? 'Sakrij' : 'Prikaži'}
          </button>
          {shownState.favorites && <Box>{displayList(faves, "favoriti")}</Box>}
        </div>
  
        <div>
          <h3>Pročitane knjige</h3>
          <button onClick={() => setShownState({ ...shownState, readBooks: !shownState.readBooks })}>
            {shownState.readBooks ? 'Sakrij' : 'Prikaži'}
          </button>
          {shownState.readBooks && <Box>{displayList(read, "procitano")}</Box>}
        </div>
  
        <div>
          <h3>Lista za čitanje</h3>
          <button onClick={() => setShownState({ ...shownState, booksToRead: !shownState.booksToRead })}>
            {shownState.booksToRead ? 'Sakrij' : 'Prikaži'}
          </button>
          {shownState.booksToRead && <Box>{displayList(toRead, "zaCitanje")}</Box>}
        </div>
        

        <Dialog open={openDialog} onClose={closeDeleteDialog}>
        <DialogTitle>Izbriši korisnika</DialogTitle>
        <DialogContent>
            <p>Jeste li sigurni?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>Cancel</Button>
          <Button onClick={handleDelete} color="error">Izbriši</Button>
        </DialogActions>
      </Dialog>

        <Button onClick={openDeleteDialog}>Izbriši profil</Button> 

      </div>

      
    )
  }

export default User
