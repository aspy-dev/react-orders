import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/home');
    });
  };

  return (
    <div className='LoginContainer'>
      <div className='LoginForm'>
        <h1>Orders管理システム</h1>
        <button onClick={loginWithGoogle}>Googleでログイン</button>
      </div>
    </div>
  )
}

export default Login