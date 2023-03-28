import logo from "./logo.svg";
import "./App.css";

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex">
      <LeftSideBar />
      <Dashboard />

      <div className="bg-yellow-500 w-7/12 h-[80vh]"></div>
      <div className="bg-green-500 w-2/12 h-[80vh]"></div>
    </div>
  );
}

export default App;
