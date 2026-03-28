import API from "../lib/api";

export const signupAPI = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

export const loginAPI = async (data: {
  email: string;
  password: string;
}) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};