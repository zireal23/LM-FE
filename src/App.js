import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from"./components/AddEmployee";
import LoginPage from './components/login';
import ViewLoans from './components/ViewLoan';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AddEmployee/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/fetch" element={<ViewLoans/>}></Route>
    

  </Routes>
  </BrowserRouter>
  );
}

export default App;
