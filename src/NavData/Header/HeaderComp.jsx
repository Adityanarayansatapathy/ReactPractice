import React from 'react'
import {Link} from 'react-router-dom'
import {Header} from './Header.css'

export  function HeaderComp() {
  return (
    <div>
        <h1>Header Component</h1>
        <nav className="navBar">
        <ul>
            <li> <Link to='/home'>Home</Link></li>
            <li ><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/lesson'>Lesson</Link></li>
            <li><Link to='/car'>Car</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            
        </ul>
        </nav>
      
    </div>
  )
}
