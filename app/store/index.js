import { observable, action } from 'mobx';

class Store {
    @observable user = null;
    @observable nowAdd = 'HOME';
    @observable signInfo = null;
    // 添加签到信息
    @action addSignInfo = (data) => {
        this.signInfo = data;
    };
    // 得到用户登录信息
    @action getUserInfo = (data) => {
        console.log(data);
        this.user = data;
    };
    @action changeAdd = (address) => {
        this.nowAdd = address;
    };
}
const USERSTORE = new Store();
export default USERSTORE;