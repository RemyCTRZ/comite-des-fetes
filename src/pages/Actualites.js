import '../style/actualites.css';
import '../style/all.css';
import { AiOutlineRight } from "react-icons/ai";
import { Actus } from '../components/Actus';
import ActuFirstCard from '../components/ActuFirstCard';
import ActuCardP from '../components/ActuCardP';

const Actualites = () => {
    return (
        <div className='actu_section'>
            <header className="actu_header">
                <h1>Actualités</h1>
            </header>
            <article className='actualites'>
                <div className='repaire'>
                    <a href="/comite-des-fetes">Accueil</a>
                    <AiOutlineRight />
                    <a href="/actualites">Actualités</a>
                </div>
                <div className='first_actus'>
                    {Actus.slice(0, 1).map((actu, index) => (
                        <ActuFirstCard key={index} actu={actu} />
                    ))}
                    <div className='second_actus'>
                        {Actus.slice(1, 3).map((actu, index) => (
                            <ActuCardP key={index} actu={actu} />
                        ))}
                    </div>
                </div>
                <div className='titre_section'>
                    <p>Autres actualités</p>
                    <hr />
                </div>
                <div className='autres_actus'>
                    {Actus.slice(3).map((actu, index) => (
                        <ActuCardP key={index} actu={actu} />
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Actualites;