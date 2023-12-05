import axios from "axios";
import { API_URL } from '@env';

const api = axios.create({
    baseURL: "https://governante.vercel.app"
})

export default api