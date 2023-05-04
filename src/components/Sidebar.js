import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  return (
    <ul className='SideItems'>
      <li className='SideItem'>
        <Link to='/home'>受注一覧</Link>
      </li>
      <li className='SideItem'>
        <Link to='/orderform'>受注入力</Link>
      </li>
      <li className='SideItem'>
        <Link to='/home'>マスタメンテ</Link>
      </li>
    </ul>
  )
}

export default Sidebar
