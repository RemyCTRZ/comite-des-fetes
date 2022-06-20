const HomepageCal = ({ event }) => {
    return (
        <a className="event" href={event.lien}>
            <div className="date_event">
                <p className="jour_event">{event.jour}</p>
                <p className="mois_event">{event.mois}</p>
            </div>
            <div className="texte_event">
                <p className="titre_event">{event.titre}</p>
                <p className="paragraphe_event">{event.texte}</p>
            </div>
        </a>
    )
}

export default HomepageCal;