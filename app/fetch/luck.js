import { post } from './post';

export function Luck() {
    const result = post('/h5/wheel/luck');
    return result;
}