// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import VideosSection from '../components/VideosSection';

import type { StateType } from '../flow-types/StateType';

const VideosSectionContainer = connect((state: StateType) => ({
  videosList: state.videosList,
  favouritesVideosList: state.favouritesVideosList,
}), dispatch => mapDispatchToProps(dispatch, ['addToFavourites']))(VideosSection);

export default VideosSectionContainer;
