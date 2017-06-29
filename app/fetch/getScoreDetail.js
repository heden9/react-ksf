import { post } from './post';



export function getScoreDetail(data) {
    var data = data || 0;
    const result = post(`h5/score/get_detail?start=${data}`);
    return result;
}