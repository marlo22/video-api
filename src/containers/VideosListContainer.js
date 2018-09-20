// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import VideosList from '../components/VideosList';

const VideosListContainer = connect(state => ({
  favouritesVideosList: state.favouritesVideosList,
  resultsPerPage: state.resultsPerPage,
  sliceFrom: state.slicePageFrom,
  sliceTo: state.slicePageTo,
}), dispatch => mapDispatchToProps(dispatch, ['changePage']))(VideosList);

export default VideosListContainer;
