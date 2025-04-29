import { UseThemeContext } from "../ContextApi/ThemeContext/ThemeContex";

export const Display = () => {
  const { theme, setTheme } = UseThemeContext();
  return (
    <button
      style={{
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        background: theme === "Light" ? "black" : "white",
        color: theme === "Light" ? "white" : "black",
      }}
      onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}
    >
      Switch Theme to {theme === "Light" ? "Dark" : "Light"}
    </button>
  );
};
