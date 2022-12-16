import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import MyRoutes from "./routes/routes";
function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
