import React from "react";
import AppRouter from "./Router";
import "./css/App.scss"; // Importez les styles globaux

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
