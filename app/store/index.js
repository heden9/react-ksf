import { observable, action } from 'mobx';

class Store {
    @observable user = null;
    @observable nowAdd = 'HOME';
    @observable signInfo = null;
    @action addSignInfo = (data) => {
        this.signInfo = data;
    };
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