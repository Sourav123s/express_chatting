import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  async function logout() {
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.statusCode === 200) {
        toast.success(data.message);
      } else if (data.error) {
        throw new Error(data.error);
      }
      /**
       * REMOVE THE LOCALSTORAGE
       */
      localStorage.removeItem("authUser");
      /**
       * REMOVE THE  authContext value
       */
      setAuthUser(null);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, logout };
};

export default useLogout;
