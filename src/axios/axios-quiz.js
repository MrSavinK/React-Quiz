import axios from 'axios'

export default axios.create({
    baseURL: 'https://quiz-constructor-7cc0d-default-rtdb.firebaseio.com/'
})