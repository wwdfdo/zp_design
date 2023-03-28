import logo from "./logo.svg";
import "./App.css";

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import Dashboard from "./components/Dashboard/Dashboard";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import RightSideBar from "./components/RightSideBar/RightSideBar";

function App() {
  return (
    <div className="flex h-screen">
      <LeftSideBar />
      <Dashboard />
      <MainDashboard />
      <RightSideBar />
    </div>
  );
}

export default App;
