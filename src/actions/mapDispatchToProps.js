import { bindActionCreators } from 'redux';
import actions from './root';

export default function mapDispatchToProps(dispatch, actionsList) {
  function actionsCreators() {
    let actionsObj = {};
    const actionsLength = actions.length;
    const actionsListLength = actionsList.length;

    for (let i = 0; i < actionsLength; i += 1) {
      for (let j = 0; j < actionsListLength; j += 1) {
        if (actions[i][actionsList[j]]) {
          actionsObj = {
            ...actionsObj,
            [actionsList[j]]: actions[i][actionsList[j]],
          };
        }
      }
    }
    return actionsObj;
  }

  return {
    actions: bindActionCreators(actionsCreators(), dispatch),
  };
}
