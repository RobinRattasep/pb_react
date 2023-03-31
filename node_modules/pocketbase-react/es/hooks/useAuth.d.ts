import { Admin, Record } from 'pocketbase';
import { AuthActions } from '../context/auth';
export interface AuthContextInterface {
    actions: AuthActions;
    isSignedIn: boolean | null;
    user: Record | Admin | null;
}
export declare function useAuth(): AuthContextInterface;
