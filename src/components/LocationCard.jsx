import "./styles/LocationCard.css"

const LocationCard = ({location}) => {
  return (
    <article className="card">
        <h2 className="card__title"> {location?.name} </h2>
        <ul className="card__list">
            <li><span className="card__item">Type:</span><span className="card__value">{location?.type}</span></li>
            <li><span className="card__item">Dimension:</span><span className="card__value">{location?.dimension}</span></li>
            <li><span className="card__item">Population:</span><span className="card__value">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationCard