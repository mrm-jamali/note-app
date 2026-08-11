"use client";

import { useState } from "react";

type User = {
  name: string;
  username: string;
  password: string;
};

export function useAuth() {
  const [error, setError] = useState("");

  const register = (
    name: string,
    username: string,
    password: string
  ) => {
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      setError("یک حساب کاربری قبلاً ساخته شده است.");
      return false;
    }

    const user: User = {
      name,
      username,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setError("");

    return true;
  };

  const login = (
    username: string,
    password: string
  ) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setError("ابتدا باید ثبت نام کنید.");
      return false;
    }

    const user: User = JSON.parse(storedUser);

    if (
      user.username !== username ||
      user.password !== password
    ) {
      setError("نام کاربری یا رمز عبور اشتباه است.");
      return false;
    }

    localStorage.setItem("isLoggedIn", "true");

    setError("");

    return true;
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
  };

  return {
    register,
    login,
    logout,
    error,
    setError,
  };
}