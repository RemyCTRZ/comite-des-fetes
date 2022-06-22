const ActuCardP = ({ actu }) => {
    return (
        <div className="actu">
            <img className='image' src={actu.image} alt={"aperçu " + actu.titre} />
            <div className="actu_txt">
                <div className="actu_titre">
                    <p className="date">{actu.date}</p>
                    <p className="titre">{actu.titre}</p>
                </div>
                <p className="txt">{actu.texte}</p>
            </div>
        </div>
    )
}

export default ActuCardP;