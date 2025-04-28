import "./App.css";
import { DisplayTogller } from "./components/Display";
import { ThemeProvider, UseTheme } from "./ContextApi/ThemeContext/ThemeContex";

const Content = () => {
  const { theme } = UseTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "Light" ? "#f0f0f0" : "#222",
        color: theme === "Light" ? "#000" : "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{theme === "Light" ? "Light Theme" : "Dark Theme"} is Active</h1>
      <DisplayTogller />
    </div>
  );
};
function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
