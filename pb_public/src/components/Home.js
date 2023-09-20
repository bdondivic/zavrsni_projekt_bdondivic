import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import pb from '../lib/pocketbase'
import { useForm } from 'react-hook-form'
import { type } from '@testing-library/user-event/dist/type'

axios.defaults.withCredentials = true
const Home = () => {
  const [books, setBooks] = useState([])
  const [originalBooks, setOriginalBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const isLoggedIn = pb.authStore.isValid
  const currentUser = pb.authStore.model

  const addToFavorites = async (book) => {
    try {
      const post = await pb.collection('users').update(currentUser.id, {
        'faves+': book.id
      })
    } 
    catch (error) {
      console.log(error)
    }
  }
  
  const addToReadBooks = async (book) => {
    try {
      const post = await pb.collection('users').update(currentUser.id, {
        'read+': book.id
      })
    } 
    catch (error) {
      console.log(error)
    }
  }
  
  const addToBooksToRead = async (book) => {
    try {

      const post = await pb.collection('users').update(currentUser.id, {
        'toRead+': book.id
      })

    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    filterBooks()
    // console.log(searchQuery)
  }, [searchQuery])

  // console.log(books)

  useEffect(() => {
    getBooks()
  }, [])

  async function getBooks() {
    const resultList = await pb.collection('books').getList(1, 50, {
      filter: 'created >= "2022-01-01 00:00:00"',
  })
    
    console.log(resultList)
    setBooks(resultList.items)
    setOriginalBooks(resultList.items)
  }

  function filterBooks() {
    const filteredBooks = originalBooks.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      ) 
    })

    setBooks(filteredBooks);
  }

  return (
    <div className='search'>
        {/* <h1>Logged in: {isLoggedIn.toString()}</h1> */}
        <TextField
          label="Search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
        {books.map((book) => (  
          <div key={book._id} className='help'>
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="subtitle1">{book.author}</Typography>
            <Typography variant="subtitle2">{book.year}</Typography>

            <Button onClick={() => addToFavorites(book)}>Dodaj u favorite</Button>
            <Button onClick={() => addToReadBooks(book)}>Dodaj u pročitano</Button>
            <Button onClick={() => addToBooksToRead(book)}>Dodaj u listu za čitanje</Button>

          </div>
    ))}
    </div>
  )
}

export default Home

