import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from"./components/AddEmployee";
import LoginPage from './components/login';
import ViewLoans from './components/ViewLoan';
import UserDashboard from './components/UserDashboard';
import Loanapply from './components/Loanapply';
import ViewItem from "./components/ViewItem";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddEmployee/>}></Route>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/fetch" element={<ViewLoans/>}></Route>
      <Route path="/applyLoan" element={<Loanapply/>}></Route>
      <Route path="/itemfetch" element={<ViewItem/>}></Route>

  
    </Routes>
    </BrowserRouter>
    </>
    );
 
}

export default App;
