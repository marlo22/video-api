// @flow
import * as React from 'react';

type Props = {
  type: string,
  prefix?: string,
  className?: string
};

const Icon = (props: Props): React.Element<'i'> => (
  <i
    className={`fa${props.prefix ? props.prefix : ''} fa-${props.type} ${props.className ? props.className : ''}`}
  />
);

Icon.defaultProps = {
  prefix: '',
  className: '',
};

export default Icon;
