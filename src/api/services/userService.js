import axiosInstance from "../axios.config";

const userEndpoints = "/users";

export const userService = {
  getUser: async () => {
    try {
      const response = await axiosInstance.get(userEndpoints);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  createUser: async (userData) => {
    try {
      const response = await axiosInstance.post(userEndpoints, userData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await axiosInstance.put(`${userEndpoints}/${userId}`, userData);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axiosInstance.delete(`${userEndpoints}/${userId}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
