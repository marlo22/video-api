// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import App from '../components/App';

const AppContainer = connect(() => ({
}), dispatch => mapDispatchToProps(dispatch, ['loadDataFromLS']))(App);

export default AppContainer;
