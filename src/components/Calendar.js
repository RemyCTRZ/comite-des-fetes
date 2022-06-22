const Calendar = ({ event }) => {
    return (
        <div className="event">
            <div className="date_event">
                <p className="jour_event">{event.jour}</p>
                <p className="mois_event">{event.mois}</p>
            </div>
            <div className="texte_event">
                <p className="titre_event">{event.titre}</p>
                <p className="paragraphe_event">{event.texte}</p>
            </div>
        </div>
    )
}

export default Calendar;