import axios from "axios";

export const usersApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  usersApi.defaults.headers.common.Authorization = `${token}`;
};
export const clearToken = () => {
  usersApi.defaults.headers.common.Authorization = "";
};  
