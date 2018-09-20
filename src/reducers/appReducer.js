/* eslint-disable no-param-reassign, consistent-return, no-shadow, no-unused-vars */
import produce from 'immer';
import * as ACTIONS from '../consts/actions';

const appReducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.UPDATE_VIDEOS_LIST:
        draft.videosList = action.payload;
        break;
      case ACTIONS.UPDATE_FAVOURITE_LIST:
        draft.favouritesVideosList = action.payload;
        break;
      case ACTIONS.CHANGE_RESULTS_PER_PAGE_NUMBER:
        draft.resultsPerPage = action.payload;
        break;
      case ACTIONS.CHANGE_PAGE:
        draft.slicePageFrom = action.payload.sliceFrom;
        draft.slicePageTo = action.payload.sliceTo;
        break;
      case ACTIONS.SET_INFO_MESSAGE:
        draft.infoMessage = action.payload;
        break;
      case ACTIONS.SET_ERROR_MESSAGE:
        draft.errorMessage = action.payload;
        break;
      default:
        return state;
    }
  });


export default appReducer;
