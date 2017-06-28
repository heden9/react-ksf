import React from 'react';
import Dialog from '../../components/dialog';
import './style.scss';
export default class personInfo extends React.PureComponent{
    render(){
        return (
            <Dialog
                needBtn={true}
                closeHandle={this.props.displayUserInfo}
                >
                <form name="userInfo" id="user-info">
                    <h5>个人资料</h5>
                    <ul className="user-ul">
                        <li>
                            <label htmlFor="">姓名</label>
                            <input type="text" className="input-ctr" placeholder="姓名"/>
                        </li>
                        <li>
                            <label htmlFor="">性别</label>
                            <select name="" id="" className="input-ctr">
                                <option value="保密">保密</option>
                                <option value="男">男</option>
                                <option value="女">女</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="">联系电话</label>
                            <input type="text" className="input-ctr" placeholder="联系电话"/>
                        </li>
                        <li>
                            <label htmlFor="">居住地址</label>
                            <input type="text" className="input-ctr" placeholder="居住地址"/>
                        </li>
                        <li>
                            <label htmlFor="">详细地址</label>
                            <input type="text" className="input-ctr" placeholder="详细地址"/>
                        </li>
                    </ul>
                    <button className="default-btn">保存</button>
                </form>
            </Dialog>
        )
    }
}