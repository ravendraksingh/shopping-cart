import "./App.css";
import TopNav from "./components/menu/TopNav";
import BottomNav from "./components/menu/BottomNav";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import { Fragment } from "react";

function App() {
  return (
    <>
      <TopNav />
      <div className="content__container">
        <AppRoutes />
      </div>
      <BottomNav />
    </>
  );
}

export default App;
