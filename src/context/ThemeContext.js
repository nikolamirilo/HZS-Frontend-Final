import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const themes = {
    dark: {
      color: "white",
      backgroundColor: "black",
    },
    light: {
      color: "black",
      backgroundColor: "white",
    },
  };

  const [theme, setTheme] = useState(themes.dark);

  const setDark = () => {
    setTheme(themes.dark);
  };
  const setLight = () => {
    setTheme(themes.light);
  };

  return <ThemeContext.Provider value={{ theme, setLight, setDark }}>{children}</ThemeContext.Provider>;
};
