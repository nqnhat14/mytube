import axios from 'axios';

const instance = axios.create({
   baseURL:'http://localhost:3400/api/'
});
export default instance;