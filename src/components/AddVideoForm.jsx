// @flow
import * as React from 'react';

// Components
import Icon from './Icon';
import Button from './Button';
import PreprocessInputValueContainer from '../containers/PreprocessInputValueContainer';

type PropsType = {};

type StateType = {
  value: string,
  addVideo: boolean,
};

type InputEventType = {
  target: {
    value: string
  }
};

export default class AddVideoForm extends React.Component<PropsType, StateType> {
  state = {
    value: '',
    addVideo: false,
  }

  inputOnChange = (e: InputEventType) => {
    this.setState({
      value: e.target.value,
    });
  }

  addVideo = () => {
    this.setState({
      addVideo: true,
    });
  }

  addVideoCb = () => {
    this.setState({
      addVideo: false,
    });
  }

  render(): React.Element<'div'> {
    return (
      <div className="add-movie-form">
        <input
          id="add-movie"
          type="text"
          className="form-control"
          value={this.state.value}
          onChange={this.inputOnChange}
          placeholder="np. https://www.youtube.com/watch?v=y5MIiF88drM lub y5MIiF88drM"
        />
        <Button
          className="btn-primary btn-primary-active"
          onClick={this.addVideo}
        >
          <Icon type="plus" />
        </Button>
        { this.state.addVideo && (
          <PreprocessInputValueContainer
            value={this.state.value}
            callback={this.addVideoCb}
          />
        ) }
      </div>
    );
  }
}
