import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Home.css'
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Home = ({ isAuth, order, setOrder }) => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getOrders = async() => {
      const data = await getDocs(collection(db, 'orders'));
      setOrderList((data.docs.map((doc) => ({...doc.data(), id: doc.id}))));
    };
    getOrders();
  }, []);

  const selectOrder = (id) => {
    // console.log(orderList);
    setOrder(orderList.filter((row) => row.id === id));
    // console.log(order);
    navigate('/orderedit')
  };

  const deleteOrder = async(id) => {
    await deleteDoc(doc(db, 'orders', id))
    window.location.href = '/home'
  };


    return (
      <div className='Home-app'>
          <Navbar />
          <div className='HomeBody'>
              <Sidebar />
              <div className='HomeContainer'>
                <table>
                  <thead>
                    <tr>
                      <th>納品書No</th>
                      <th>受注日</th>
                      <th>出荷日</th>
                      <th>取引先</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {orderList.map((row) => {
                    return (
                    <tr key={row.orderId}>
                      <td>{row.orderId}</td>
                      <td>{row.orderDate}</td>
                      <td>{row.shipDate}</td>
                      <td>{row.torihiki}</td>
                      <td>
                        <div>
                            <button onClick={() => selectOrder(row.orderId)}>詳細</button>
                            <button onClick={() => deleteOrder(row.orderId)}>削除</button>
                        </div>
                      </td>
                    </tr>)
                  })}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    )
}



export default Home