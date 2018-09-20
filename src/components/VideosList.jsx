// @flow
/* eslint-disable react/no-did-update-set-state, no-underscore-dangle */
import * as React from 'react';

// Components
import FiltersPanel from './FiltersPanel';
import VideosListItemContainer from '../containers/VideosListItemContainer';
import VideoModal from './VideoModal';
import PaginationContainer from '../containers/PaginationContainer';

type PropsType = {
  actions: (obj: { sliceFrom: number, sliceTo: number }) => void,
  data: {},
  favouritesVideosList: [],
  resultsPerPage: number,
  sliceFrom: number,
  sliceTo: number,
};

type StateType = {
  data: {},
  sortType: string,
  favouritesFilter: boolean,
  playId?: string,
};

class VideosList extends React.Component <PropsType, StateType> {
  state = {
    data: this.props.data,
    sortType: 'desc',
    favouritesFilter: false,
    playId: undefined,
  };

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (JSON.stringify(prevState.data) !== JSON.stringify(this.props.data)) {
      this.setState({
        data: this.props.data,
      });
    }
  }

  sortAsc = () => {
    this.setState({
      sortType: 'asc',
    });
  }

  sortDesc = () => {
    this.setState({
      sortType: 'desc',
    });
  }

  toggleFavourites = () => {
    this.setState(prevState => ({
      favouritesFilter: !prevState.favouritesFilter,
    }));

    this.props.actions.changePage({
      sliceFrom: 0,
      sliceTo: this.props.resultsPerPage,
    });
  }

  openModal = (id: string) => {
    this.setState({
      playId: id,
    });
  }

  closeModal = () => {
    this.setState({
      playId: undefined,
    });
  }

  render(): React.Fragment {
    const {
      playId,
      favouritesFilter,
      sortType,
    } = this.state;

    const {
      favouritesVideosList,
      sliceFrom,
      sliceTo,
      data,
    } = this.props;

    let _videosListMap = Object.keys(data);

    if (favouritesFilter) {
      _videosListMap = _videosListMap.filter(elem => favouritesVideosList.includes(Number(elem)));
    }

    if (sortType === 'asc') _videosListMap.sort();
    if (sortType === 'desc') _videosListMap.reverse();

    return (
      <React.Fragment>
        <FiltersPanel
          sortAscFn={this.sortAsc}
          sortDescFn={this.sortDesc}
          toggleFavouritesFn={this.toggleFavourites}
          sortType={this.state.sortType}
          favouritesFilter={this.state.favouritesFilter}
        />
        <ul className="videos-list">
          { _videosListMap.slice(sliceFrom, sliceTo).map((item) => {
            const currentItem = data[item];
            const favourites = this.props.favouritesVideosList.includes(currentItem.id);

            return (
              <VideosListItemContainer
                key={currentItem.id}
                id={currentItem.id}
                name={currentItem.name}
                author={currentItem.author}
                provider={currentItem.provider}
                thumbUrl={currentItem.thumbUrl}
                views={currentItem.views}
                likes={currentItem.likes}
                created={currentItem.created}
                favourite={favourites}
                openModal={this.openModal}
              />
            );
          })}
        </ul>
        { playId && (
          <VideoModal
            url={data[playId].iframeSrc}
            title={data[playId].name}
            closeModal={this.closeModal}
          />
        )}
        <PaginationContainer
          totalResults={_videosListMap.length}
        />
      </React.Fragment>
    );
  }
}

export default VideosList;
