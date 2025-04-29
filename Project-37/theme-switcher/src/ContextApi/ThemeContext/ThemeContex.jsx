import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "Light";
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const UseThemeContext = () => {
  const useTheme = useContext(ThemeContext);
  return useTheme;
};
