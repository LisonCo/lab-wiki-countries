import React from 'react';
import {Route} from 'react-router-dom';
import CountryDetail from './countryDetail';

function mainContainer(props) {
    debugger
    return (
        <Route exact path="/details/:id" render={()=> <CountryDetail countries={props.countries}/>} />
    )
}

export default mainContainer