import '../style/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav_logo active' : 'nav_logo')}>Comité des fêtes<br />Lambres-lez-Aire</NavLink>
            <ul className='nav_list'>
                <li>
                    <NavLink to="/actualites" className={({ isActive }) => (isActive ? 'active' : '')}>Actualités</NavLink>
                </li>
                <li>
                    <NavLink to="/evenements" className={({ isActive }) => (isActive ? 'active' : '')}>événements</NavLink>
                </li>
                <li>
                    <NavLink to="/galerie" className={({ isActive }) => (isActive ? 'active' : '')}>Galerie</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;