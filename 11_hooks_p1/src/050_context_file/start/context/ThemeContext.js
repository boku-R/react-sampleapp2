import { useContext, useState, createContext } from "react";

export const ThemeComtext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeComtext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeComtext.Provider>
  );
};

export const useTheme = () => useContext(ThemeComtext);
