import axios from 'axios';

const instance = axios.create({
   baseURL:'http://192.168.42.177:3400/api/'
});
export default instance;