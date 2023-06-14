import { getAuthToken } from './store-service';
import { authActions } from '../_store/auth.slice';
import { store } from '../_store/index';


export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if ([401, 403].includes(response.status) && authToken()) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                const logout = () => store.dispatch(authActions.logout());
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function authToken() {
    return getAuthToken();

}