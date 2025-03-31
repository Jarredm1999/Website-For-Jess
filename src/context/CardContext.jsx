import { createContext, useState, useContext } from "react";

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const value = {
    isFlipped,
    setIsFlipped,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
