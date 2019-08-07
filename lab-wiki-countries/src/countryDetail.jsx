import React from 'react';
import countries from "./countries.json";
import {Link} from 'react-router-dom';
import './countryDetail.css'

function countryDetail (props) {
    const getCountry = (id) => {
        let found = countries.find(oneCountry => {
            return oneCountry.cca3 === id;
        })
        return found;
    }
    const { params } = props.match;
    const foundCountry = getCountry(params.id);

    return (
        <div className="country-details-container">
            <h2>{ foundCountry.name.common }</h2>
            <p>Capital: {foundCountry.capital}</p>
            <p>Area: {foundCountry.area} km2 </p>
            {foundCountry.borders.length > 0 ? 
            <div>
                <p>Borders:</p> 
                <ul>
                {foundCountry.borders.map((border) => {
                    return (
                                <li>
                                    <Link to = {`/details/${border}`}>
                                        {getCountry(border).name.common}
                                    </Link>
                                </li>
                    )
                })}
                </ul>
            </div>
            : 
            <div></div>
            }
        </div>
    )
}

export default countryDetail


