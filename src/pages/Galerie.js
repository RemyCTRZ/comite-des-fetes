import '../style/galerie.css';
import '../style/all.css';
import { AiOutlineRight } from "react-icons/ai";


const Galerie = () => {
    return (
        <section className="section_evenements">
            <header>
                <h1>événements</h1>
            </header>
            <article className='evenements'>
                <div className='repaire'>
                    <a href="/comite-des-fetes">Accueil</a>
                    <AiOutlineRight />
                    <a href="/evenements">événements</a>
                </div>
            </article>
        </section>
    )
}

export default Galerie;