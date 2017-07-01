import { get } from './get';


export function getPrizeInfo() {
    const result = get('/h5/wheel/get_info');
    return result;
}