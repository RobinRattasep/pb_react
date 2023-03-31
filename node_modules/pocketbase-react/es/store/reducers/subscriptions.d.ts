import * as ReduxType from '../types';
export type SubscriptionAction = {
    type: ReduxType.SubscriptionsTypes;
    payload: string | string[];
};
export declare const subscriptions: (state: string[] | undefined, action: SubscriptionAction) => string[];
