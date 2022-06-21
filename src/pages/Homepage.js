import '../style/homepage.css';
import '../style/keyframes.css'
import ActuCard from '../components/ActuCard';
import ActuCardGrid from '../components/ActuCardGrid';
import { Actus } from '../components/Actus';
import { BiRightArrowAlt } from 'react-icons/bi';
import { EvenementsArray } from '../components/EvenementsArray';
import HomepageCal from '../components/HomepageCal';
import { GalleryArray } from '../components/GalleryArray';
import GalleryCard from '../components/GalleryCard';

const Homepage = () => {
    return (
        <section className="homepage">
            <header className="homepage_header">
                <h1>Comité des fêtes de Lambres-lez-Aire</h1>
                <a className='homepage_actu' href='/actualites'>
                    <p className='derniere_actu'>Dernière actualité</p>
                    {Actus.slice(0, 1).map((actu, index) => (
                        <ActuCard key={index} actu={actu} />
                    ))}
                </a>
            </header>
            <article className='art_actualites'>
                <div className='titre_section'>
                    <a href="/actualites">actualités</a>
                    <hr />
                </div>
                <div className='liste_actualites'>
                    {Actus.slice(0, 3).map((actu, index) => (
                        <ActuCardGrid key={index} actu={actu} />
                    ))}
                </div>
                <a className='see_more' href="/actualites">Voir plus <BiRightArrowAlt /></a>
            </article>
            <article className='art_evenements'>
                <div className='titre_section'>
                    <a href="/evenements">événements</a>
                    <hr />
                </div>
                <div className='liste_evenements'>
                    {EvenementsArray.slice(0, 5).map((event) => (
                        <HomepageCal key={event.id} event={event} />
                    ))}
                </div>
                <a className='see_more' href="/evenements">Voir plus <BiRightArrowAlt /></a>
            </article>
            <article>
                <div className='titre_section'>
                    <a href="/galerie">galerie</a>
                    <hr />
                </div>
                <div className='liste_images'>
                    {GalleryArray.slice(0, 3).map((image) => (
                        <GalleryCard key={image.id} image={image} />
                    ))}
                </div>
                <a className='see_more' href="/actualites">Voir plus <BiRightArrowAlt /></a>
            </article>
        </section>
    )
}

export default Homepage;