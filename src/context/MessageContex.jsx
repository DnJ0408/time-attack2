import { createContext, useState } from "react";


export const MessageContext = createContext(null);

export const MessageContextProvider = ({ children }) => {

  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{
      message: message,
      onMessageChange: setMessage
    }}>
      {children}
    </MessageContext.Provider>
  );
}