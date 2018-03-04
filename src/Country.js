import React from 'react';
import style from './country.css';

const Country = (country)=>{
	console.log(style);
	return <li><img className={style.single-country} src={country.imageUrl} alt="Country"/><span>{country.name}</span></li>
};

export default Country;