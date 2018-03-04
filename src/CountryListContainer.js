import {connect} from 'react-redux';
import CountriesList from './CountriesList';

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries
    };
};

export default connect(mapStateToProps)(CountriesList);