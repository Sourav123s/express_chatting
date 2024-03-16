import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCoversations from "../zustand/useConversation";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConverstaions] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConverstaions(data.result);
      } catch (error) {
        toast.error(error.error);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
