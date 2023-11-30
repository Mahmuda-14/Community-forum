import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://community-forum-ass-12-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

