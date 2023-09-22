import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from"./components/AddEmployee";
import LoginPage from './components/login';
import ViewLoans from './components/ViewLoan';
import UserDashboard from './components/UserDashboard';
import Loanapply from './components/Loanapply';
import ViewItem from "./components/ViewItem";
import AdminDashboard from './components/AdminDashboard';
import ViewEmployees from './components/ViewEmployees';
import Edit from './components/Edit';
import Delete from './components/Delete';
import AddLoan from './components/AddLoan';
import DeleteLoan from './components/DeleteLoan';
import ViewAllLoans from './components/ViewAllLoans';
import EditLoan from './components/EditLoan';
import ViewAllItems from './components/ViewAllItems';
import ViewAdminItems from './components/ViewAdminItems';
import EditItem from './components/EditItem';
import DeleteItem from './components/DeleteItem';
import AddItem from './components/AddItem';
import LandingPage from './components/LandingPage';
import Adminlogin from './components/Adminlogin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/adminlogin" element={<Adminlogin/>}></Route>
      <Route path="/create" element={<AddEmployee/>}></Route>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/fetch" element={<ViewLoans/>}></Route>
      <Route path="/applyLoan" element={<Loanapply/>}></Route>
      <Route path="/itemfetch" element={<ViewItem/>}></Route>
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
      <Route path="/viewemployees" element={<ViewEmployees/>}></Route>
      <Route path="/fetchloancard" element={<ViewAllLoans/>}></Route>
      <Route path="/edit/:employeeId" element={<Edit/>}></Route>
      <Route path="/editloan/:loanId" element={<EditLoan/>}></Route>
      <Route path="/delete/:employeeId" element={<Delete/>}></Route>
      <Route path="/deleteloan/:loanId" element={<DeleteLoan/>}></Route>
      <Route path="/addloan" element={<AddLoan/>}></Route>
      {/* <Route path="/fetchitemadmin" element={<ViewAllItems/>}></Route> */}
      <Route path="/viewitems" element={<ViewAdminItems/>}></Route>
      <Route path="/edititems/:itemId" element={<EditItem/>}></Route>
      <Route path="/deleteitems/:itemId" element={<DeleteItem/>}></Route>
      <Route path="/additems" element={<AddItem/>}></Route>

  
    </Routes>
    </BrowserRouter>
    </>
    );
 
}

export default App;
