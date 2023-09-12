import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from"./components/AddEmployee";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AddEmployee/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
