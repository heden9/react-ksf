import React from 'react';
import './style.scss';
export default class scoreMenu extends React.PureComponent{
    render(){
        console.log(this.props.listInfo);
        return (
            <ul id="score-menu">
                {
                    this.props.listInfo.map((item) => {
                        return (
                            <Item data={item} key={item.create_time}/>
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
            <p className="create-time">{props.data.create_time.split(' ')[0]}</p>
            <div className="green-box">
                <span>{props.data.reason}</span>
                <span>{props.data.score}</span>
            </div>
        </li>
    )
};