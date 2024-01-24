import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://house-hunter-server-rho-nine.vercel.app/'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;