import React from 'react';
import './style.scss';
import checkIcon from '../../static/img/mall/sign_icon_choose.png';
import goldIcon from '../../static/img/mall/gold_money.png';
import headImg from '../../static/img/mall/sign_head.png';
export default class signDetail extends React.PureComponent{
    render(){
        const detail = this.props.data.detail.peek();
        return (
            <div id="sign-list">
                <div className="head">
                    <img src={headImg} alt=""/>
                </div>
                <h5 className="title">你连续签到了{this.props.data.cont_days}天</h5>
                <ul>
                    {
                        detail.map((item, index) => {
                            return (
                                <Item key={item.day} data={item}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


const Item = (props) => {
    return (
        <li className={props.data.is_check?'detail-item active' : 'detail-item'}>
            <div className='img-box'>
                <img src={goldIcon} alt=""/>
                <p>积分+{props.data.score}</p>
                {
                    props.data.is_check?
                        <img src={checkIcon} alt="" className="check-icon"/>:null
                }
            </div>
            <p className="day">第{props.data.day}天</p>
        </li>
    )
};