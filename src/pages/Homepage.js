import '../style/homepage.css';
import ActuCard from '../components/ActuCard';
import { Actus } from '../components/Actus';

const Homepage = () => {
    return (
        <section className="homepage">
            <header className="homepage_header">
                <h1>Comité des fêtes de Lambres-lez-Aire</h1>
                <div className='homepage_actu'>
                    <p className='derniere_actu'>Dernière actualité</p>
                    {Actus.slice(0, 1).map((actu, index) => (
                        <ActuCard key={index} actu={actu} />
                    ))}
                </div>
            </header>
            <article>
                <div className='titre_section'>
                    <a href="/actualites">Actualités</a>
                    <hr />
                </div>
                <div className='liste_actualites'>
                {Actus.slice(0, 3).map((actu, index) => (
                        <ActuCard key={index} actu={actu} />
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Homepage;