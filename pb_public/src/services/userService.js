// import axios from 'axios'
// import React, { useEffect, useState } from 'react'


// const sendRequest = async () => {
//     const res = await axios.get('http://localhost:3001/api/user', {
//     withCredentials: true,
//     }).catch(err => console.log(err))
//     const data = await res.data

//     setFavorites(data.user.favoriti)
//     setReadBooks(data.user.procitano)
//     setBooksToRead(data.user.zaCitanje)

//     console.log(res.data)
//     return data
// }

// const addToReadBooks = async (book) => {
//     try {
//       await axios.put(`http://localhost:3001/api/users/${user.username}/lists/procitano/add`, {
//         title: book.title,
//         author: book.author,
//         year: book.year
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

// export default { sendRequest, addToReadBooks }