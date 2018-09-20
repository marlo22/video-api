// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import NoVideo from '../components/NoVideo';

const NoVideoContainer = connect(() => ({
}), dispatch => mapDispatchToProps(dispatch, ['loadExampleData']))(NoVideo);

export default NoVideoContainer;
