import React from 'react';
import './style.scss';
import { Link } from 'react-router';
import USERSTORE from '../../../store';
export default class btnGroup extends React.PureComponent{
    displayUserInfo = () => {

    };
    render(){
        const props = this.props;
        return (
            <div id="next-area">
                <ul className="btn-group">
                    <li onClick={() => props.changeNowAdd('INTRODUCTION')}>
                        <img src={require("../../../static/img/mall/bg_03.png")} alt=""/>
                        <h5>积分说明</h5>
                    </li>
                    <li onClick={() => props.displayUserInfo(true)}>
                        <img src={require("../../../static/img/mall/bg_05.png")} alt=""/>
                        <h5>我的资料</h5>
                    </li>
                    <li onClick={() => props.changeNowAdd('RANK')}>
                        <img src={require("../../../static/img/mall/bg_07.png")} alt=""/>
                        <h5>积分排名</h5>
                    </li>
                    <li>
                        <img src={require("../../../static/img/mall/bg_12.png")} alt=""/>
                        <h5>积分抽奖</h5>
                    </li>
                    <li>
                        <img src={require("../../../static/img/mall/bg_13.png")} alt=""/>
                        <h5>积分商城</h5>
                    </li>
                    <li onClick={() => props.displaySignIn(true)}>
                        <img src={require("../../../static/img/mall/bg_14.png")} alt=""/>
                        <h5>每日签到</h5>
                    </li>
                </ul>
            </div>
        )
    }
}