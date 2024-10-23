import api from "./index";

export const getUsers = () => api.get("/users");
export const getUsersById = (id) => api.get(`/users/${id}`);
export const createUser = (user) => api.post("/users", user);
