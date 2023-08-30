import "./App.css";
import Content from "./components/main/Content";
import TopNav from "./components/menu/TopNav";
import BottomNav from "./components/menu/BottomNav";


function App() {
  return (
    <div className="App">
      <TopNav />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
