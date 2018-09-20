// @flow
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, max-len */
import * as React from 'react';

// Components
import Icon from './Icon';
import Button from './Button';

type PropsType = {
  actions: {
    addToFavourites: (id: string) => void,
    removeFromFavourites: (id: string) => void,
    removeVideo: (id: string) => void,
  },
  id: string,
  name: string,
  author: string,
  provider: string,
  thumbUrl: string,
  views: string,
  likes: string,
  favourite: boolean,
  openModal: (id: string) => void
};

function parseDate(date: string): string {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = Number(parsedDate.getMonth()) + 1;
  const year = parsedDate.getFullYear();


  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
}

const VideosListItem = (props: PropsType): React.Element<'li'> => (
  <li className="videos-list-item">
    <div className="videos-list-item-thumb">
      <img src={props.thumbUrl} onClick={() => props.openModal(props.id)} alt="Video thumbnail" />
      <Button className="btn" onClick={() => props.actions.removeVideo(props.id)}>
        <Icon type="times" />
      </Button>
      <Icon type={props.provider} prefix="b" />
    </div>
    <div className="videos-list-item-info-box">
      <span className="video-title">{props.name}</span>
      <span>
        <Icon type="calendar" /> Dodano: {parseDate(props.id)}
      </span>
      <ul className="videos-list-item-info">
        <li>
          <Icon type="user" /> {props.author}
        </li>
        <li>
          <Icon type="eye" /> {props.views || ' b/d'}
        </li>
        <li>
          <Icon type="thumbs-up" /> {props.likes}
        </li>
      </ul>
      <Button
        className="btn-favourite"
        onClick={() => {
          if (props.favourite) {
            props.actions.removeFromFavourites(props.id);
          } else {
            props.actions.addToFavourites(props.id);
          }
        }}
      >
        <Icon type="star" prefix={!props.favourite ? 'r' : 's'} /> {!props.favourite ? 'Dodaj do' : 'Usuń z '} ulubionych
      </Button>
    </div>
  </li>
);

export default VideosListItem;
