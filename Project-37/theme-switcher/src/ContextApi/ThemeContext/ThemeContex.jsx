import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme, name: "naveed" }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const UseContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
