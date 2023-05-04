import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='Apptitle'>
        <Link to='/home'>
          <strong>Orders管理システム</strong>
        </Link>
      </div>
      <div className='menu'>
        <Link to='/logout'>
          ログアウト
        </Link>
      </div>
    </nav>
  )
}

export default Navbar