import axios from 'axios';

const axiosAuth = () => {
    return axios.create({
      headers: {
        'content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
  };
export default axiosAuth;