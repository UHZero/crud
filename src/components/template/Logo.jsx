import './Logo.css'
import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>