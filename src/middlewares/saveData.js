/* eslint-disable no-underscore-dangle */
import * as ACTIONS from '../consts/actions';
import { updateVideosList, updateFavouriteList } from '../actions/appActions';
import exampleData from '../exampleData';

function saveItem(key, val) {
  if (!localStorage) {
    console.error('Nie udało zapisać się ustawień! Twoja przeglądarka nie wspiera localStorage!');
  } else {
    localStorage.setItem(key, val);
  }
}

const saveToLS = state => next => (action) => {
  const _state = state.getState();

  switch (action.type) {
    case ACTIONS.ADD_VIDEO: {
      const payload = {
        ..._state.videosList,
        [action.payload.id]: {
          ...action.payload,
        },
      };

      saveItem('videosList', JSON.stringify(payload));
      next(updateVideosList(payload));
      break;
    }
    case ACTIONS.ADD_TO_FAVOURITES: {
      let payload = _state.favouritesVideosList;

      if (!_state.favouritesVideosList.includes(action.id)) {
        payload = [action.id, ..._state.favouritesVideosList];
      }

      saveItem('favouritesVideosList', JSON.stringify(payload));

      next(updateFavouriteList(payload));
      break;
    }

    case ACTIONS.REMOVE_VIDEO: {
      const payload = {
        ..._state.videosList,
      };
      delete payload[action.id];

      saveItem('videosList', JSON.stringify(payload));
      next(updateVideosList(payload));
      break;
    }

    case ACTIONS.REMOVE_FROM_FAVOURITES: {
      const itemId = _state.favouritesVideosList.indexOf(action.id);
      const payload = [..._state.favouritesVideosList];
      payload.splice(itemId, 1);

      saveItem('favouritesVideosList', JSON.stringify(payload));

      next(updateFavouriteList(payload));
      break;
    }

    case ACTIONS.CLEAR_DATA:
      next(updateVideosList({}));
      next(updateFavouriteList([]));
      localStorage.clear();
      break;

    case ACTIONS.LOAD_EXAMPLE_DATA:
      saveItem('videosList', JSON.stringify(exampleData));
      next(updateVideosList(exampleData));
      break;

    default:
      next(action);
      break;
  }
};

export default saveToLS;
