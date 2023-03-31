import * as ReduxType from '../types';
function appendSubscription(subscription, subscriptions) {
  return subscriptions.includes(subscription) ? subscriptions : [...subscriptions, subscription];
}
function deleteSubscription(subscription, subscriptions) {
  return subscriptions.filter(sub => sub !== subscription);
}
export const subscriptions = (state = [], action) => {
  switch (action.type) {
    case ReduxType.SET_SUBSCRIPTIONS:
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
    case ReduxType.ADD_SUBSCRIPTION:
      return appendSubscription(action.payload, state);
    case ReduxType.DELETE_SUBSCRIPTION:
      return deleteSubscription(action.payload, state);
    default:
      return state;
  }
};