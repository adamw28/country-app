import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import DevTools from './devTools';
import CountriesList from './CountryListContainer'


render(
    <Provider store={store}>
    	<div>
	        <h1>Inicjalizacja projektu</h1>
	        <CountriesList/>
	        <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);