// @flow
import * as React from 'react';

// Components
import Button from './Button';
import Icon from './Icon';

type PropsType = {
  actions: {|
    clearData: () => void
  |}
}

const FooterSection = (props: PropsType): React.Element<'footer'> => (
  <footer>
    <Button className="btn" onClick={props.actions.clearData}>
      <Icon type="trash" /> Wyczyść bibliotekę
    </Button>
    <span>
      Created by <Icon type="github" prefix="b" /> <a href="http://www.github.com/marlo22">marlo22</a>
    </span>
    <span>
      Powered by YouTube API & Vimeo API
    </span>
  </footer>
);

export default FooterSection;
