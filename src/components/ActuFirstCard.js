const ActuFirstCard = ({ actu }) => {
    return (
        <div className="actu_first actu">
            <div className="actu_titre">
                <p className="titre">{actu.titre}</p>
                <p className="date">{actu.date}</p>
            </div>
            <img className='image' src={actu.image} alt={"aperçu " + actu.titre} />
            <div className="actu_txt">
                <p className="txt">{actu.texte}</p>
            </div>
        </div>
    )
}

export default ActuFirstCard;