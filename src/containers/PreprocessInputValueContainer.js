// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import PreprocessInputValue from '../components/PreprocessInputValue';

const PreprocessInputValueContainer = connect(() => ({
}), dispatch => mapDispatchToProps(dispatch, ['addVideo']))(PreprocessInputValue);

export default PreprocessInputValueContainer;
