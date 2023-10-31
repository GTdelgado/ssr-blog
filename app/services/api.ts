import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { apikey: process.env.NEXT_PUBLIC_APIKEY },
});

export { api };
