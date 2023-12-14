import axios from 'axios';

export default axios.create( {
    baseURL : "https://jsonplaceholder.typicode.com/",
    header  :{
        'Content-Type': 'application/json'  
    }
})