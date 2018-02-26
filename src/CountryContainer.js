import {connect} from 'react-redux';
import Country from './Country';
import {getCountries} from './data/countries.json'

const mapDispatchToProps = dispatch => ({
  getCountries: (id) => dispatch(getCountries(id))
});

export default connect(null, mapDispatchToProps)(Country);