import { UseTheme } from "../ContextApi/ThemeContext/ThemeContex";
const DisplayTogller = () => {
  const useTheme = UseTheme();
  const toggalTheme = () => {
    useTheme.setTheme(useTheme.theme === "Light" ? "Dark" : "Light");
  };
  return (
    <>
      <button
        type="button"
        onClick={toggalTheme}
        style={{
          padding: "10px 20px",
          margin: "20px",
          cursor: "pointer",
          backgroundColor: useTheme.theme === "Light" ? "#333" : "#fff",
          color: useTheme.theme === "Light" ? "#fff" : "#333",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Switch to {useTheme.theme === "Light" ? "Dark" : "Light"} Theme
      </button>
    </>
  );
};

export { DisplayTogller };
