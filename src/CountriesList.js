import React from 'react';
import Country from './CountryContainer';

const CountriesList = ({countries}) => {
	return <ul className="countries-list" >{countries.map(country => <Country key={country.id} {...country}/>)}</ul>;}

export default CountriesList;