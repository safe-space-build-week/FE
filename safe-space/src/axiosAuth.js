import axios from 'axios';

const axiosAuth = () => {
  console.log(localStorage.getItem('token'))
  return axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `bearer ${ localStorage.getItem('token') }`
      }
    })
  };
export default axiosAuth;

