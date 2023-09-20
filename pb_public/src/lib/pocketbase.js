import Pocketbase from 'pocketbase'

const pb = new Pocketbase(process.env.REACT_APP_PB)

export default pb