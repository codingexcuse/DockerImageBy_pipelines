import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://3.110.25.149/company",
  headers: { "Content-Type": "application/json" }
});

export default axiosInstance
