import { post } from './post';

export function getUserInfo() {
    const result = post('/h5/personal');
    return result;
}