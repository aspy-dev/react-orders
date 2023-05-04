import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './OrderForm.css';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderEdit = ({ order, setOrder }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async() => {
      const orderDocument = await getDoc(doc(db, 'orders', order[0].orderId));
      setOrder((orderDocument.data()));
    };
    getOrder();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    let today = new Date(Date.now()).toLocaleDateString('ja-JP');

    console.log(order);

    await updateDoc(doc(db, 'orders', order.orderId), {
        orderId: order.orderId,
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
  navigate('/home')
  };

  const handleOrder = (e) => {
    setOrder((prev) => ({...prev, [e.target.name]: e.target.value}));
    console.log(order);
  };

  return (
    <div className='Form-app'>
        <Navbar />
        <div className='Formbody'>
            <Sidebar />
            <div className='FormContainer'>
              <div className='FormDivision'>
                <h2>受注修正</h2>
                <form onSubmit={handleSubmit} className='OrderForm'>
                  <div className='OrderHeader'>
                    <input 
                      name='id' 
                      type='text' 
                      onChange={handleOrder} 
                      value={order.orderId || ''}
                      readOnly
                    />
                    <input 
                      name='shipDate' 
                      type='date' 
                      onChange={handleOrder} 
                      value={order.shipDate || ''}
                    />
                    <input 
                      name='torihiki' 
                      type='text' 
                      onChange={handleOrder} 
                      placeholder='取引先'
                      value={order.torihiki || ''}
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
                          value={order.shohinCD1 || ''}/>
                        </td>
                        <td><input 
                          name='shohinSuryo1' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='数量'
                          value={order.shohinSuryo1 || ''} 
                        />個</td>
                        <td><input 
                          name='shohinKin1' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='金額' 
                          value={order.shohinKin1 || ''}
                        />円</td>
                      </tr>
                      <tr>
                        <td><input 
                          name='shohinCD2' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='商品コード' 
                          value={order.shohinCD2 || ''}
                        /></td>
                        <td><input 
                          name='shohinSuryo2' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='数量' 
                          value={order.shohinSuryo2 || ''}
                        />個</td>
                        <td><input 
                          name='shohinKin2' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='金額' 
                          value={order.shohinKin2 || ''}
                        />円</td>
                      </tr>
                      <tr>
                        <td><input 
                          name='shohinCD3' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='商品コード'
                          value={order.shohinCD3 || ''}
                        /></td>
                        <td><input 
                          name='shohinSuryo3' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='数量' 
                          value={order.shohinSuryo3 || ''}
                        />個</td>
                        <td><input 
                          name='shohinKin3' 
                          type='text' 
                          onChange={handleOrder} 
                          placeholder='金額' 
                          value={order.shohinKin3 || ''}
                        />円</td>
                      </tr>
                      </tbody>
                  </table>
                  <button className='registerBtn' type='submit'>確定</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderEdit