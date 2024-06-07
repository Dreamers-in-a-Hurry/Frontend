import axios from "axios";

const useAxios = () => {
  const baseUrl = `https://localhost:7058/api/v1`;

  const axiosInstance = axios.create({
    baseURL: baseUrl
  })

  return axiosInstance;
}

export default useAxios;