"use client";

import { useState } from "react";

type User = {
  name: string;
  username: string;
  password: string;
};

const DEMO_USER = {
  username: "demo",
  password: "123",
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

    // ورود با حساب Demo
    if (
      username === DEMO_USER.username &&
      password === DEMO_USER.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setError("");

      return true;
    }

    // ورود با حساب ثبت‌نام شده
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setError("نام کاربری یا رمز عبور اشتباه است.");
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