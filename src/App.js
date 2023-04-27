import "./App.css";

// import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

// import Dashboard from "./components/Dashboard/Dashboard";
// import MainDashboard from "./components/MainDashboard/MainDashboard";
// import RightSideBar from "./components/RightSideBar/RightSideBar";
import BethelLeftSideBar from "./components/BethelLeftSideBar/BethelLeftSideBar";
import BethelCloud from "./components/BethelCloud/BethelCloud";
import BethelMainDashBoard from "./components/BethelMainDashBoard/BethelMainDashBoard";
import BethelRightSideBar from "./components/BethelRightSideBar/BethelRightSideBar";

function App() {
  return (
    <div className="flex h-screen">
      {/* <LeftSideBar /> */}
      <BethelLeftSideBar />
      {/* <Dashboard /> */}
      <BethelCloud />
      {/* <MainDashboard /> */}
      <BethelMainDashBoard />
      {/* <RightSideBar /> */}
      <BethelRightSideBar />
    </div>
  );
}

export default App;
