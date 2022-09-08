import './Nav.css'
import React from 'react'
import Menu from './Menu'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Menu param="/" icon="home" title="Início" />
            <Menu param="/users" icon="users" title="Usuários" />
        </nav>
    </aside>