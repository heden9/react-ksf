import React from 'react';
import './style.scss';
export default class rankListMenu extends React.PureComponent{
    render(){
        return (
            <ul id="rank-menu">
                {
                    this.props.listInfo.map((item, index) => {
                        return (
                            <Item key={index} data={item} index={index+1}/>
                        )
                    })
                }
            </ul>
        )
    }
}


const Item = (props) => {
    return (
        <li className="rank-item">
            <div className="head-portrait">
                <img src={props.data.headimgurl} alt=""/>
                {
                    props.index <= 3?
                        <i className="rank-icon rank-iconaa">{props.index}</i>:
                        <i className="rank-icon rank-iconbb">{props.index}</i>
                }
            </div>
            <span className="nickname">{props.data.nickname || '无名氏'}</span>
            <span className="score">{props.data.score}分</span>
        </li>
    )
};