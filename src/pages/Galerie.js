import '../style/galerie.css';
import '../style/all.css';
import { AiOutlineRight } from "react-icons/ai";
import { GalleryArray } from '../components/GalleryArray';
import GalleryCard from '../components/GalleryCard';


const Galerie = () => {
    return (
        <section className="section_galerie">
            <header>
                <h1>Galerie</h1>
            </header>
            <article className='galerie'>
                <div className='repaire'>
                    <a href="/comite-des-fetes">Accueil</a>
                    <AiOutlineRight />
                    <a href="/galerie">Galerie</a>
                </div>
                <div className='titre_section'>
                    <p>2022</p>
                    <hr />
                </div>
                <div className='galerie_container'>
                    {GalleryArray.map((image, index) => (
                        <GalleryCard key={index} image={image} />
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Galerie;