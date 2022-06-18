const ActuCard = ({ actu }) => {
    return (
        <div className="actu_card">
            <div className="actu_txt">
                <div className="actu_titre">
                    <a href={actu.lien} className="titre">{actu.titre}</a>
                    <p className="date">{actu.date}</p>
                </div>
                <p>{actu.texte}</p>
            </div>
            <img className='image' src={actu.image} alt={"aperçu " + actu.titre} />
        </div>
    )
}

export default ActuCard;