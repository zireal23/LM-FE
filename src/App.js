import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddEmployee from"./components/AddEmployee";
import UserDashboard from "./components/UserDashboard";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
