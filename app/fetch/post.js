import 'whatwg-fetch';
import 'es6-promise';

export function post(url) {
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    return result;
}
