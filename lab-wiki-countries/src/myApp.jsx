import React, {Component} from 'react';
import Country from "./country.jsx";
import './myApp.css'


class myApp extends Component {

    render() {
    let allCountries = this.props.countries.map((country) => {
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

