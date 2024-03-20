import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useCoversations from "../zustand/useConversation";
import notificationsSound from "../assets/sound/notification.mp3";

const useListenMessages = () => {
  const { socket, onlineUsers } = useSocketContext();
  const { messages, setMessages } = useCoversations();

  useEffect(() => {
    // here we listen for messages
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationsSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
