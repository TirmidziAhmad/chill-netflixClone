import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://67171eda3fcb11b265d4861b.mockapi.io/netflixCloneData/v1/users";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await axios.post(API_URL, userData);
      setUsers([...users, response.data]);
      return response.data;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, userData);
      setUsers(users.map((user) => (user.id === id ? response.data : user)));
      return response.data;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  return { users, loading, error, fetchUsers, createUser, updateUser, deleteUser };
};
