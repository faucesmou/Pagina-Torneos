import { store } from '../_store/index';

export function getAuthToken() {
    return store.getState().auth.user?.token;
}
