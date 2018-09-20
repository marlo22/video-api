// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import FooterSection from '../components/FooterSection';

const FooterSectionContainer = connect(() => ({
}), dispatch => mapDispatchToProps(dispatch, ['clearData']))(FooterSection);

export default FooterSectionContainer;
