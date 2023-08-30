import "./App.css";
import TopNav from "./components/menu/TopNav";
import BottomNav from "./components/menu/BottomNav";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import { Fragment } from "react";

function App() {
  return (
    <div className="container p-0">
      <TopNav />
      <AppRoutes />
      <BottomNav />
    </div>
  );
}

export default App;
