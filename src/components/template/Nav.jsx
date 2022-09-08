import './Nav.css'
import React from 'react'
import Menu from './Menu'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Menu dest="#/" icon="home" title="Início" />
            <Menu dest="#/users" icon="users" title="Usuários" />
        </nav>
    </aside>