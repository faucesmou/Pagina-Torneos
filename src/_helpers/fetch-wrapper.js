/* import { authActions } from '../_store/auth.slice'; */
import { handleResponse } from './handle-response';
import { getAuthToken } from './store-service';


export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = authToken();
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

function authToken() {
    return getAuthToken();

}

