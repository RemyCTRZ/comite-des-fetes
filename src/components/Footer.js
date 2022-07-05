import '../style/footer.css';
import logo_cdf from '../assets/images/logo_cdf.jpg';
import logo_commune from '../assets/images/logo_commune.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div className='footer_logos'>
                <img className="footer_logo" src={logo_commune} alt="blason de lambres-lez-aire" />
                <img className="footer_logo" src={logo_cdf} alt="logo du comité des fêtes" />
            </div>
            <hr />
            <ul className='footer_list'>
                <li>
                    <NavLink to="/comite-des-fetes" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/actualites" className={({ isActive }) => (isActive ? 'active' : '')}>Actualités</NavLink>
                </li>
                <li>
                    <NavLink to="/evenements" className={({ isActive }) => (isActive ? 'active' : '')}>Événements</NavLink>
                </li>
                <li>
                    <NavLink to="/galerie" className={({ isActive }) => (isActive ? 'active' : '')}>Galerie</NavLink>
                </li>
            </ul>
            <div className='mentions'>
                <p>Site développé par Rémy Cottrez © Comité des fêtes - Lambres-lez-Aire</p>
            </div>
        </footer>
    )
}

export default Footer;