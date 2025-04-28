import "./App.css";
import { Display } from "./components/Display";
import { ThemeProvider, UseTheme } from "./ContextApi/ThemeContext/ThemeContex";

function App() {
  const usetheme = UseTheme();
  return (
    <ThemeProvider>
      <Display />
    </ThemeProvider>
  );
}

export default App;
