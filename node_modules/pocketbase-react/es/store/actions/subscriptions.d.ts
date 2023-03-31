import { SubscriptionAction } from '../reducers/subscriptions';
declare const setSubscriptions: (payload: string[]) => SubscriptionAction;
declare const addSubscription: (payload: string) => SubscriptionAction;
declare const deleteSubscription: (payload: string) => SubscriptionAction;
export { setSubscriptions, addSubscription, deleteSubscription };
