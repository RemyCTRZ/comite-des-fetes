import '../style/evenements.css';
import '../style/all.css';
import { AiOutlineRight } from "react-icons/ai";
import { EvenementsArray } from "../components/EvenementsArray";
import Calendar from '../components/Calendar';

const Evenements = () => {
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
                <div className='titre_section'>
                    <p>2022</p>
                    <hr />
                </div>
                <div className='evenements_container 2022'>
                    {EvenementsArray.slice(0).map((event) => (
                        <Calendar key={event.num} event={event} />
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Evenements;