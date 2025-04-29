import "./App.css";
import { Display } from "./components/Display";
import { UseThemeContext } from "./ContextApi/ThemeContext/ThemeContex";
function App() {
  const { theme } = UseThemeContext();
  return (
    <div
      style={{
        background: theme === "Light" ? "white" : "black",
        color: theme === "Light" ? "black" : "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{theme === "Light" ? "Light" : "Dark"} Theme is Active</h1>
      <Display />
    </div>
  );
}

export default App;
