import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const saveTracker = (data) => API.post("/tracker/save", data);
export const getTracker = (date, userId) =>
  API.get(`/tracker/get/${date}/${userId}`);
