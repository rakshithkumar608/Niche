"use client";

import { useState } from "react";
import { loginAPI, signupAPI } from "../services/auth.service";



export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const signup =  async (data: any) => {
        try {
            setLoading(true);
            setError("");

            const res = await signupAPI(data);

            return res;
        } catch (err: any) {
            setError(err.response?.data?.message || "Signup failed"); 
        } finally {
            setLoading(false);
        }
    };

    const login = async (data: any) => {
        try {
            setLoading(true);
            setError("");

            const res = await loginAPI(data);

            localStorage.setItem("token", res.token);

            return res;
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { signup, login, loading, error };
}
