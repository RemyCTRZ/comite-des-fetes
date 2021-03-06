const ActuCard = ({ actu }) => {
    return (
        <div className="actu_card_header">
            <div className="actu_txt">
                <div className="actu_titre">
                    <p className="titre">{actu.titre}</p>
                    <p className="date">{actu.date}</p>
                </div>
                <p className="txt">{actu.texte}</p>
            </div>
            <img className='image' src={actu.image} alt={"aperçu " + actu.titre} />
        </div>
    )
}

export default ActuCard;