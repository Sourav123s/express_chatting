import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  async function login(userName, password) {
    try {
      const dataIsValid = handelInputError(userName, password);
      if (!dataIsValid) return;
      setLoading(true);
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (data.statusCode === 200) {
        toast.success(data.message);
      } else if (data.error) {
        throw new Error(data.error);
      }
      /**
       * SET THE LOCALSTORAGE
       */
      localStorage.setItem("authUser", JSON.stringify(data.result));
      /**
       * UPDATE THE THE authContext value
       */
      setAuthUser(data.result);
      setLoading(false);
    } catch (error) {
      toast.error(error);
      return;
    }
  }
  return { loading, login };
};
function handelInputError(userName, password) {
  console.log(userName, password);
  if (!userName || !password) {
    toast.error("Please fill all the fields!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters!");
    return false;
  }

  return true;
}

export default useLogin;
