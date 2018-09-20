// @flow
import * as React from 'react';

// Components
import Icon from './Icon';
import Button from './Button';

type PropsType = {
  sortAscFn: () => void,
  sortDescFn: () => void,
  toggleFavouritesFn: () => void,
  sortType: string,
  favouritesFilter: boolean
};

const FiltersPanel = (props: PropsType): React.Element<'ul'> => (
  <ul className="sort-panel-list">
    <li>
      <Button className="btn" onClick={props.sortDescFn}>
        <Icon type="caret-square-down" className={props.sortType === 'desc' ? 'active' : ''} />
      </Button>
    </li>
    <li>
      <Button className="btn" onClick={props.sortAscFn}>
        <Icon type="caret-square-up" className={props.sortType === 'asc' ? 'active' : ''} />
      </Button>
    </li>
    <li>
      <Button className="btn" onClick={props.toggleFavouritesFn}>
        <Icon type="star" prefix="s" className={props.favouritesFilter ? 'active' : ''} />
      </Button>
    </li>
  </ul>
);

export default FiltersPanel;
