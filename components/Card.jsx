const Card = ({ name, image, location, cuisines, rating }) => {
    return (
        <div className="card">
            <img src={image} alt="card-img" className="card-img" />
            <h4>{name}</h4>
            <p>{location}</p>
            <p>{cuisines}</p>
            <p>{rating}⭐</p>
        </div>
    )
}

export default Card