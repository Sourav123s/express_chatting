import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function signUp(inputs) {
    const succes = handelInputError(inputs);
    if (!succes) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (data.statusCode === 201) {
        toast.success(data.message);
      } else if (data.statusCode === 400) {
        toast.error(data.message);
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
      toast.error(error.message);
      return;
    }
  }

  return { loading, signUp };
};

export default useSignup;

function handelInputError(inputs) {
  if (
    !inputs.fullName ||
    !inputs.userName ||
    !inputs.password ||
    !inputs.confirmPassword ||
    !inputs.gender
  ) {
    toast.error("Please fill all the fields!");
    return false;
  }

  if (inputs.password !== inputs.confirmPassword) {
    toast.error("Password and Confirm Password must be the same!");
    return false;
  }

  if (inputs.password.length < 6) {
    toast.error("Password must be at least 6 characters!");
    return false;
  }

  return true;
}
