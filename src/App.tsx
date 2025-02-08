import React from "react";
import AppRouter from "./Router";
import "./css/App.scss"; // Importez les styles globaux
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <AppRouter />
    </div>
  );
};

export default App;
