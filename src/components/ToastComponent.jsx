import React from 'react'
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ToastComponent() {
    const [showToastSuccess, setShowToastSuccess] = useState(false);
    const [showToastFail, setShowToastFail] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
  return (
   <>
   <ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }}>
   <Toast show={showToastFail} onClose={() => setShowToastFail(false)} delay={3000} autohide bg="danger" style={{color:"#fff", backgroundColor:"#CA0800", padding:"2em"}}>
     <Toast.Body>{toastMessage}</Toast.Body>
 </Toast>
</ToastContainer>
<ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }} >

  <Toast show={showToastSuccess} onClose={() => setShowToastSuccess(false)} delay={3000} autohide bg='success' style={{color:"#fff", backgroundColor:"#28A745", padding:"2em"}}>
    <Toast.Body>{toastMessage}</Toast.Body>
  </Toast>
</ToastContainer>
   </>
  )
}

export default ToastComponent