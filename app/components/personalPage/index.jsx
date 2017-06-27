import React from 'react';
import './style.scss';
import Drum from '../../static/img/Drum.png';
export default class personalPage extends React.PureComponent{
    render(){
        return (
            <div id="person-area">
                <div className="head-portrait">
                    <img src={Drum} alt=""/>
                </div>
                <h5 className="name">{this.props.username}</h5>
            </div>
        )
    }
}