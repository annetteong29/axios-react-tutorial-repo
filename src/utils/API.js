import axios from 'axios';

export default axios.create({
    // use RandomUser API as base URL
    baseURL: "https://randomuser.me/api",
    // specify we want JSON in return
    responseType: 'json'
})

