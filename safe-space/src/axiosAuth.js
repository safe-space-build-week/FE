import axios from 'axios';

const axiosAuth = () => {
    return axios.create({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: localStorage.getItem('token')
      }
    })
  };
export default axiosAuth;

