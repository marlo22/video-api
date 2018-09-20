// @flow
import * as React from 'react';

// Types
import type { EventObject } from '../flow-types/EventObjectType';

type PropsType = {
  resultsPerPage: number,
  changeNumberResults: (e: EventObject) => void
};

const ResultsNumberControl = (props: PropsType): React.Element<'div'> => (
  <div className="results-number-form">
    <span>Wyników na stronie: </span>
    <input
      type="number"
      value={props.resultsPerPage}
      onChange={props.changeNumberResults}
    />
  </div>
);

export default ResultsNumberControl;
