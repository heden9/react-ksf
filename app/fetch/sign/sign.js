import { post } from '../post';


export function signIn() {
    const result = post('/h5/personal/checkin');
    return result
}