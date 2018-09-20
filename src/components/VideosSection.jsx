// @flow
import * as React from 'react';

// Components
import NoVideoContainer from '../containers/NoVideoContainer';
import VideosListContainer from '../containers/VideosListContainer';

type PropsType = {
  videosList: {}
};

const VideosSection = (props: PropsType): React.Element<'section'> => {
  const { videosList } = props;

  return (
    <section>
      <h2 className="text-header">Moja biblioteka</h2>
      { !Object.keys(videosList).length && <NoVideoContainer /> }
      { !!Object.keys(videosList).length && <VideosListContainer data={videosList} /> }
    </section>
  );
};

export default VideosSection;
