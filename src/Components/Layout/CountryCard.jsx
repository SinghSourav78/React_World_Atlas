import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
    const {flags, name, population, region, capital} = country;
    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt}  />

                <div className="countryInfo">
                    {/* ap aab dekh rahe ho iska title badha h uska boss badha ho jaa raha h jiske karan UI accha nae dikh raha kuki box ke chotta badha dikhne ke karan */}
                    <p className="card-title">{name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}</p>
                    <p>
                        <span className="card-description">Population:</span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span className="card-description">Region:</span>
                        {region}
                    </p>
                    <p>
                        <span className="card-description">Capital:</span>
                        {capital[0]}
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                        <button>
                            Read More
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}