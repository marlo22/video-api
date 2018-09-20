// @flow
import * as ACTIONS from '../consts/actions';

// Types
import type { VideoObjectType } from '../flow-types/VideoObjectType';

type LOAD_DATA_FROM_LS_TYPE = {
  type: ACTIONS.LOAD_DATA_FROM_LS
};

export function loadDataFromLS(): LOAD_DATA_FROM_LS_TYPE {
  return {
    type: ACTIONS.LOAD_DATA_FROM_LS,
  };
}

type ADD_VIDEO_TYPE = {
  type: ACTIONS.ADD_VIDEO,
  payload: VideoObjectType
};

export function addVideo(payload: VideoObjectType): ADD_VIDEO_TYPE {
  return {
    type: ACTIONS.ADD_VIDEO,
    payload,
  };
}

type REMOVE_VIDEO_TYPE = {
  type: ACTIONS.REMOVE_VIDEO_TYPE,
  id: string
}

export function removeVideo(id: string): REMOVE_VIDEO_TYPE {
  return {
    type: ACTIONS.REMOVE_VIDEO,
    id,
  };
}

type UPDATE_VIDEOS_LIST_TYPE = {
  type: ACTIONS.UPDATE_VIDEOS_LIST,
  payload: {}
};

export function updateVideosList(payload: {}): UPDATE_VIDEOS_LIST_TYPE {
  return {
    type: ACTIONS.UPDATE_VIDEOS_LIST,
    payload,
  };
}

type UPDATE_FAVOURITE_LIST_TYPE = {
  type: ACTIONS.UPDATE_FAVOURITE_LIST,
  payload: []
};

export function updateFavouriteList(payload: []): UPDATE_FAVOURITE_LIST_TYPE {
  return {
    type: ACTIONS.UPDATE_FAVOURITE_LIST,
    payload,
  };
}

type ADD_TO_FAVOURITES_TYPE = {
  type: ACTIONS.ADD_TO_FAVOURITES,
  id: string
};

export function addToFavourites(id: string): ADD_TO_FAVOURITES_TYPE {
  return {
    type: ACTIONS.ADD_TO_FAVOURITES,
    id,
  };
}

type REMOVE_FROM_FAVOURITES_TYPE = {
  type: ACTIONS.REMOVE_FROM_FAVOURITES,
  id: string
};

export function removeFromFavourites(id: string): REMOVE_FROM_FAVOURITES_TYPE {
  return {
    type: ACTIONS.REMOVE_FROM_FAVOURITES,
    id,
  };
}

type CLEAR_DATA_TYPE = {
  type: ACTIONS.CLEAR_DATA
};

export function clearData(): CLEAR_DATA_TYPE {
  return {
    type: ACTIONS.CLEAR_DATA,
  };
}

type LOAD_EXAMPLE_DATA_TYPE = {
  type: ACTIONS.LOAD_EXAMPLE_DATA
};

export function loadExampleData(): LOAD_EXAMPLE_DATA_TYPE {
  return {
    type: ACTIONS.LOAD_EXAMPLE_DATA,
  };
}

type CHANGE_RESULTS_PER_PAGE_NUMBER_TYPE = {
  type: ACTIONS.CHANGE_RESULTS_PER_PAGE_NUMBER_DATA
};

export function changeResultsPerPageNumber(payload: number): CHANGE_RESULTS_PER_PAGE_NUMBER_TYPE {
  return {
    type: ACTIONS.CHANGE_RESULTS_PER_PAGE_NUMBER,
    payload,
  };
}

type CHANGE_PAGE_TYPE = {
  type: ACTIONS.CHANGE_PAGE_DATA
};

export function changePage(payload: { sliceFrom: number, sliceTo: number }): CHANGE_PAGE_TYPE {
  return {
    type: ACTIONS.CHANGE_PAGE,
    payload,
  };
}
