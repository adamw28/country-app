import {connect} from 'react-redux';
import CountriesList from './CountriesList';

const mapStateToProps = state => {
  console.log(state);
  return {countries: state.countries}
};

export default connect(mapStateToProps)(CountriesList);