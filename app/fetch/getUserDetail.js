import { post } from './post';


export function getUserDetail() {
    const result = post('/h5/personal/info');
    return result;
}