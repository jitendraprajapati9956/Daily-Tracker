<<<<<<< HEAD
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const saveTracker = (data) => API.post("/tracker/save", data);
export const getTracker = (date, userId) =>
  API.get(`/tracker/get/${date}/${userId}`);
=======
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const saveTracker = (data) => API.post("/tracker/save", data);
export const getTracker = (date, userId) =>
  API.get(`/tracker/get/${date}/${userId}`);
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
