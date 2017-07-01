import React from 'react';
import './style.scss';
export default class scoreMenu extends React.PureComponent{
    render(){
        return (
            <ul id="score-menu">
                {
                    this.props.listInfo.map((item, index) => {
                        return (
                            <Item data={item} key={index} index={index}/>
                        )
                    })
                }
            </ul>
        )
    }
}


const Item = (props) => {
    return (
        <li className="score-menu-item">
            {
                props.index === 0 ? <div className="line"></div>:null
            }
            <p className="create-time">{props.data.create_time.split(' ')[0]}</p>
            <div className="green-box">
                <span>{props.data.reason}</span>
                <span className="score-change">积分{props.data.score}</span>
            </div>
        </li>
    )
};