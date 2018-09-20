// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import VideosListItem from '../components/VideosListItem';

const VideosListItemContainer = connect(() => ({
}), dispatch => mapDispatchToProps(dispatch, ['addToFavourites', 'removeVideo', 'removeFromFavourites']))(VideosListItem);

export default VideosListItemContainer;
