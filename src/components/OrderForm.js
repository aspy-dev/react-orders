import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './OrderForm.css';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useEffect } from 'react';

const OrderForm = ({ order, setOrder }) => {

  useEffect(() => {
    setOrder({
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
    })
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    let orderId = Date.now().toLocaleString();
    let today = new Date(Date.now()).toLocaleDateString('ja-JP');

    let replacedOrderId = orderId.replace(',', 'A');
    while(replacedOrderId !== orderId) {
      orderId = orderId.replace(',', 'A');
      replacedOrderId = replacedOrderId.replace(',', 'A');
    };

    await setDoc(doc(db, 'orders', orderId), {
        orderId: orderId,
        orderDate: today,
        user: auth.currentUser.displayName,
        shipDate: order.shipDate,
        torihiki: order.torihiki,
        shohinCD1: order.shohinCD1,
        shohinSuryo1: order.shohinSuryo1,
        shohinKin1: order.shohinKin1,
        shohinCD2: order.shohinCD2,
        shohinSuryo2: order.shohinSuryo2,
        shohinKin2: order.shohinKin2,
        shohinCD3: order.shohinCD3,
        shohinSuryo3: order.shohinSuryo3,
        shohinKin3: order.shohinKin3,
    });
  setOrder({
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
  };

  const handleOrder = (e) => {
    setOrder((prev) => ({...prev, [e.target.name]: e.target.value}));
    console.log(order)
  };

  return (
    <div className='Form-app'>
        <Navbar />
        <div className='Formbody'>
            <Sidebar />
            <div className='FormContainer'>
              <div className='FormDivision'>
              <h2>受注入力</h2>
                <form onSubmit={handleSubmit} className='OrderForm'>
                  <div className='OrderHeader'>
                  <input 
                      name='orderId' 
                      type='text' 
                      onChange={handleOrder} 
                      value={order.orderId}
                    />
                    <input 
                      name='shipDate' 
                      type='date' 
                      onChange={handleOrder} 
                      value={order.shipDate}
                    />
                    <input 
                      name='torihiki' 
                      type='text' 
                      onChange={handleOrder} 
                      placeholder='取引先'
                      value={order.torihiki}
                    />
                  </div>
                  <table className='OrderDetail'>
                    <tbody>
                      <tr>
                        <td><input 
                          name='shohinCD1' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='商品コード' 
                          value={order.shohinCD1}/>
                        </td>
                        <td><input 
                          name='shohinSuryo1' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='数量'
                          value={order.shohinSuryo1} 
                        />個</td>
                        <td><input 
                          name='shohinKin1' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='金額' 
                          value={order.shohinKin1}
                        />円</td>
                      </tr>
                      <tr>
                        <td><input 
                          name='shohinCD2' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='商品コード' 
                          value={order.shohinCD2}
                        /></td>
                        <td><input 
                          name='shohinSuryo2' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='数量' 
                          value={order.shohinSuryo2}
                        />個</td>
                        <td><input 
                          name='shohinKin2' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='金額' 
                          value={order.shohinKin2}
                        />円</td>
                      </tr>
                      <tr>
                        <td><input 
                          name='shohinCD3' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='商品コード'
                          value={order.shohinCD3}
                        /></td>
                        <td><input 
                          name='shohinSuryo3' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='数量' 
                          value={order.shohinSuryo3}
                        />個</td>
                        <td><input 
                          name='shohinKin3' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='金額' 
                          value={order.shohinKin3}
                        />円</td>
                      </tr>
                      </tbody>
                  </table>
                  <button type='submit'>確定</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderForm