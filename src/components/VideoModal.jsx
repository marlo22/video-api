// @flow
import * as React from 'react';

// Components
import Button from './Button';
import Icon from './Icon';

type PropsType = {
  url: string,
  title: string,
  closeModal: () => void
};

const VideoModal = (props: PropsType): React.Element<'div'> => (
  <div className="video-modal">
    <Button onClick={props.closeModal}>
      <Icon type="times" />
    </Button>
    <iframe
      className="video-frame"
      title={props.title}
      src={props.url}
    />
  </div>
);

export default VideoModal;
