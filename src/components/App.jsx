// @flow
import * as React from 'react';

// Components
import AddVideoSection from './AddVideoSection';
import VideosSectionContainer from '../containers/VideosSectionContainer';
import FooterSectionContainer from '../containers/FooterSectionContainer';

type PropsType = {
  actions: {
    loadDataFromLS: () => void
  }
};

export default class App extends React.Component<PropsType> {
  componentDidMount() {
    this.props.actions.loadDataFromLS();
  }

  render(): React.Fragment {
    return (
      <React.Fragment>
        <AddVideoSection />
        <VideosSectionContainer />
        <FooterSectionContainer />
      </React.Fragment>
    );
  }
}
