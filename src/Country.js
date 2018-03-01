import React from 'react';
import style from './Country.css';

const Country = (country)=>{
	console.log(style);
	return <li><img src={country.imageUrl} alt="Country"/><span>{country.name}</span></li>
};

export default Country;