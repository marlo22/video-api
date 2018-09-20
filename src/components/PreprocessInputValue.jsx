// @flow
/* eslint-disable no-useless-escape */
import * as React from 'react';
import axios from 'axios';

// Types
import type { VideoObjectType } from '../flow-types/VideoObjectType';

type PropsType = {
  actions: {|
    addVideo: (obj: VideoObjectType) => void
  |},
  value: string,
  callback: () => void
};

type StateType = {};

export default class PreprocessInputValue extends React.Component<PropsType, StateType> {
  static splitQuery = (value: string) => {
    const idSplit = value.split('/');
    const id = idSplit[idSplit.length - 1];

    if (id.includes('?v=')) {
      return {
        id: id.split('?v=')[1],
        provider: 'youtube',
      };
    }

    if (id === Number(id).toString()) {
      return {
        id,
        provider: 'vimeo',
      };
    }

    return {
      id,
      provider: 'youtube',
    };
  }

  componentDidMount() {
    const { id, provider } = PreprocessInputValue.splitQuery(this.props.value);

    this.fetchData(provider, id);

    this.props.callback();
  }

  fetchData(provider: string, id: string): void {
    if (provider === 'vimeo') {
      axios.get(`https:\/\/api.vimeo.com/videos/${id}?access_token=6f95e814ddd494384a54b8daa212250c`)
        .then((response) => {
          if (response.status === 200) {
            const { data } = response;

            const obj = {
              id: Date.now(),
              name: data.name,
              author: data.user.name,
              provider,
              thumbUrl: data.pictures.sizes[3].link,
              views: data.stats.plays,
              likes: data.metadata.connections.likes.total,
              iframeSrc: `https://player.vimeo.com/video/${id}?color=ffffff&badge=0`,
            };

            this.props.actions.addVideo(obj);
          }
        })
        .catch(err => console.log(err));
    }

    if (provider === 'youtube') {
      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${id}&key=AIzaSyDfbfbspAWMvRo6BSTRwmQxESNW-zXYg4A`)
        .then((response) => {
          if (response.status === 200) {
            const data = response.data.items[0];
            const { snippet, statistics } = data;

            const obj = {
              id: Date.now(),
              name: snippet.title,
              author: snippet.channelTitle,
              provider,
              thumbUrl: snippet.thumbnails.standard.url,
              views: statistics.viewCount,
              likes: statistics.likeCount,
              iframeSrc: `https://www.youtube.com/embed/${id}`,
            };

            this.props.actions.addVideo(obj);
          }
        })
        .catch(err => console.log(err));
    }
  }

  render(): null {
    return null;
  }
}
