import { get } from './get';


export function getRankList(start) {
    var start = start || 0;
    const result = get(`/h5/score/get_top?start=${start}`);
    return result;
}