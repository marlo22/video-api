// @flow
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions/mapDispatchToProps';
import Pagination from '../components/Pagination';

const PaginationContainer = connect(state => ({
  resultsPerPage: state.resultsPerPage,
}), dispatch => mapDispatchToProps(dispatch, ['changeResultsPerPageNumber', 'changePage']))(Pagination);

export default PaginationContainer;
