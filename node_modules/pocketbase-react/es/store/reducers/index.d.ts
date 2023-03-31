export declare const appReducer: import("redux").Reducer<import("redux").CombinedState<{
    records: import("./records").ReduxRecord;
    subscriptions: string[];
}>, import("./records").RecordAction | import("./subscriptions").SubscriptionAction>;
export type State = ReturnType<typeof appReducer>;
