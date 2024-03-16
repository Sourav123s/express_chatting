import { useState } from "react";
import useCoversations from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useCoversations();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      setMessages([...messages, data.result]);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessages;
