// @flow
/* eslint-disable react/no-will-update-set-state */
import * as React from 'react';

// Types
import type { EventObject } from '../flow-types/EventObjectType';

// Components
import Button from './Button';
import ResultsNumberControl from './ResultsNumberControl';

type PropsType = {
  actions: {
    changeResultsPerPageNumber: (number: number) => void,
    changePage: (obj: { sliceFrom: number, sliceTo: number }) => void
  },
  totalResults: number,
};

type StateType = {
  resultsPerPage: number,
  currentPage: number,
  pages: number,
  sliceVideosListMap?: Array<string>
};

export default class Pagination extends React.Component<PropsType, StateType> {
  static calculatePagesNumber(totalResults: number, resultsPerPage: number): number {
    const pagesNumber = totalResults / resultsPerPage;

    return totalResults % resultsPerPage === 0 ? pagesNumber : Math.floor(pagesNumber) + 1;
  }

  state = {
    resultsPerPage: 9,
    currentPage: 1,
    pages: Pagination.calculatePagesNumber(this.props.totalResults, 9),
  };

  componentWillUpdate(nextProps: PropsType, nextState: StateType) {
    if (
      (nextState.resultsPerPage !== this.state.resultsPerPage)
      ||
      (nextProps.totalResults !== this.props.totalResults)
    ) {
      this.setState({
        pages: Pagination.calculatePagesNumber(nextProps.totalResults, nextState.resultsPerPage),
      });
    }
  }

  sliceVideosListMap = (pageNumber: number): void => {
    const { resultsPerPage } = this.state;
    const sliceTo = resultsPerPage * pageNumber;
    const sliceFrom = sliceTo - resultsPerPage;

    this.props.actions.changePage({
      sliceFrom,
      sliceTo,
    });
  }

  changeNumberResults = (e: EventObject) => {
    const { value } = e.target;
    this.setState({
      resultsPerPage: Number(value),
    }, () => {
      this.sliceVideosListMap(this.state.currentPage);
      this.props.actions.changeResultsPerPageNumber(Number(value));
    });
  }

  changePage = (pageNumber: number): void => {
    this.setState({
      currentPage: pageNumber,
    });

    this.sliceVideosListMap(pageNumber);
  }

  render(): React.Fragment {
    return (
      <React.Fragment>
        <ResultsNumberControl
          resultsPerPage={this.state.resultsPerPage}
          changeNumberResults={this.changeNumberResults}
        />
        <ul className="pagination">
          { (() => {
            const pages = [];
            const { currentPage } = this.state;
            for (let i = 1; i <= this.state.pages; i += 1) {
              pages.push(i);
            }

            return pages.map(pageNumber => (
              <li key={pageNumber}>
                <Button
                  className={`btn ${currentPage === pageNumber ? 'active' : ''}`}
                  onClick={() => this.changePage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              </li>
            ));
          })() }
        </ul>
      </React.Fragment>
    );
  }
}
