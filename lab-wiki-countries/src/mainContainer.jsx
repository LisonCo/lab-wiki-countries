import React from 'react';
import {Route} from 'react-router-dom';
import CountryDetail from './countryDetail';

const mainContainer = () => {
    return (
        <Route path='/details/:id' component={CountryDetail}/>
    )
}

export default mainContainer
