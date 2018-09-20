// @flow
import * as React from 'react';

// Components
import Button from './Button';
import Icon from './Icon';

type PropsType = {
  actions: {
    loadExampleData: () => void
  }
}

const NoVideo = (props: PropsType): React.Element<'div'> => (
  <div className="no-video">
    <Icon type="sad-cry" prefix="r" />
    <span>Biblioteka nie zawiera filmów!</span>
    <Button className="btn-primary" onClick={props.actions.loadExampleData}>
      Wczytaj przykładową zawartość
    </Button>
  </div>
);

export default NoVideo;
