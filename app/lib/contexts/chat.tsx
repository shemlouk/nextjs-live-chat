"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { initializeSocket } from "../api/socket";
import { Message } from "../definitions";

export type ChatContextValue = {
  messages: Set<Message>;
  addMessage(message: Message): void;
};

export const ChatContext = createContext<ChatContextValue>({
  messages: new Set(),
  addMessage: () => {},
});

export function ChatContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState<ChatContextValue["messages"]>(
    new Set(),
  );

  const addMessage = useCallback<ChatContextValue["addMessage"]>(
    (message) => {
      setMessages(new Set(messages.add(message)));
    },
    [setMessages, messages],
  );

  useEffect(() => {
    const socket = initializeSocket();

    socket.on("chat", (data) => {
      const message = JSON.parse(data) as Message;
      addMessage(message);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
