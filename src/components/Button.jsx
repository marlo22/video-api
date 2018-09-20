// @flow
import * as React from 'react';

type PropsType = {
  children: React.Node,
  className?: string,
  onClick: () => void,
};

const Button = (props: PropsType): React.Element<'button'> => (
  <button
    className={`btn ${props.className ? props.className : ''}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.defaultProps = {
  className: '',
};

export default Button;
