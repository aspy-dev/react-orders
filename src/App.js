import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import { useState } from "react";
import Logout from "./components/Logout";
import OrderEdit from "./components/OrderEdit";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [order, setOrder] = useState({
    orderId: '',
    user: '',
    orderDate: '',
    shipDate: '',
    torihiki: '',
    shohinCD1: '',
    shohinSuryo1: '',
    shohinKin1: '',
    shohinCD2: '',
    shohinSuryo2: '',
    shohinKin2: '',
    shohinCD3: '',
    shohinSuryo3: '',
    shohinKin3: '',
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login setIsAuth={ setIsAuth }/>}></Route>
          <Route path='/home' element={<Home
            isAuth={isAuth} 
            order={order}
            setOrder={setOrder}
          />}></Route>
          <Route path='/logout' element={<Logout setIsAuth={ setIsAuth }/>}></Route>
          <Route path='/orderform' element={<OrderForm 
            order={order}
            setOrder={setOrder}
          />}></Route>
          <Route path='/orderedit' element={<OrderEdit 
            order={order}
            setOrder={setOrder}
          />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
