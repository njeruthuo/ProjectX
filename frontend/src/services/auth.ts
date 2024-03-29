import axios from "axios";

const API_URL = 'http://localhost:3001/api';

export interface ISignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export const signup = async (userData: ISignUp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signUp`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export const login = async (userData: ILogin) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
