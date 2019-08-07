import React, {Component} from 'react';
import countries from "./countries.json";
import Country from "./country.jsx";
import './myApp.css'

class myApp extends Component {
    state = {
        countries: countries
    }
    render() {
    let allCountries = this.state.countries.map((country) => {
        return (
            <Country 
            name={country.name.common}
            id={country.cca3}
            flag={country.flag}/>
        )
    })
    return(
            <div className="myApp">
                {allCountries}
            </div>
    )
    }
}

export default myApp
