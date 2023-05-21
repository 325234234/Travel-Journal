import narnia from "../assets/narnia.png"
import middleearth from "../assets/middleearth.png"
import starwars from "../assets/starwars.png"

export default function Card({title, location, googleMaps, startDate, endDate, description, image}) {
    const img = image === "narnia" ? narnia : image === "middleearth" ? middleearth : starwars
    
    return (
        <div className="card">
            <img src={img} className="card--image" />
            <div className="card--geoStats">
                <i className="fa-solid fa-location-dot card--pin" style={{color: "#F55A5A"}}></i>
                <p className="card--location">{location}</p>
                <a href={googleMaps} className="card--link" target="_blank">View on Google Maps</a>
            </div>
            <p className="card--heading">{title}</p>
            <p className="card--date">{startDate} - {endDate}</p>
            <p className="card--description">{description}</p>
        </div>
    )
}