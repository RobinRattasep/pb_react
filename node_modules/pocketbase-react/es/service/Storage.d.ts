export declare class StorageService {
    static Constants: {
        SUBSCRIBED: string;
        COOKIE: string;
    };
    static get(key: string): Promise<string | null>;
    static set(key: string, value: string): Promise<void>;
    static remove(key: string): Promise<void>;
}
