// src/lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // backend URL
});

export default api;
