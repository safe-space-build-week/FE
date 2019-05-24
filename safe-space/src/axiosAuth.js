import axios from "axios";

const axiosAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }
  });
};
export default axiosAuth;
