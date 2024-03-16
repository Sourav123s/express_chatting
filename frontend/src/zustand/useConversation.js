import { create } from "zustand";

const useCoversations = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => {
    set({ selectedConversation });
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useCoversations;
