/* eslint-disable no-underscore-dangle */
import * as ACTIONS from '../consts/actions';
import { updateVideosList, updateFavouriteList } from '../actions/appActions';

function loadDataFromLS() {
  if (!localStorage) {
    console.error('Twoja przeglądarka nie wspiera localStorage!');
  }

  return {
    videosList: JSON.parse(localStorage.getItem('videosList')) || {},
    favouritesVideosList: JSON.parse(localStorage.getItem('favouritesVideosList')) || [],
  };
}

const saveToLS = () => next => (action) => {
  switch (action.type) {
    case ACTIONS.LOAD_DATA_FROM_LS: {
      const { videosList, favouritesVideosList } = loadDataFromLS();

      next(updateVideosList(videosList));
      next(updateFavouriteList(favouritesVideosList));
      break;
    }
    default:
      next(action);
      break;
  }
};

export default saveToLS;
