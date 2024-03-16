import { useEffect, useState } from "react";
import useCoversations from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useCoversations();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`api/message/${selectedConversation?._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data.result);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id]);

  return { messages, loading };
};

export default useGetMessages;
