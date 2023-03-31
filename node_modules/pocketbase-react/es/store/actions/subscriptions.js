import * as ReduxType from '../types';
const setSubscriptions = payload => ({
  type: ReduxType.SET_SUBSCRIPTIONS,
  payload
});
const addSubscription = payload => ({
  type: ReduxType.ADD_SUBSCRIPTION,
  payload
});
const deleteSubscription = payload => ({
  type: ReduxType.DELETE_SUBSCRIPTION,
  payload
});
export { setSubscriptions, addSubscription, deleteSubscription };