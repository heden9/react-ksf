import React from 'react';
import './style.scss';
import X from '../../static/img/x.svg';
export default class NotFound extends React.PureComponent{
    stopPropagation = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    };
    componentDidMount(){
        document.onclick = () => {
            this.props.closeHandle(false);
        };
    }
    componentWillUnmount(){
        document.onclick = null;
    }
    render(){
        const flag = this.props.needBtn;
        return (
            <div
                style={this.props.style}
                className="mask fadeIn" >
                <div className="menu slideInUp"
                     onClick={this.stopPropagation}>
                    {
                        flag?
                            <img src={X} alt="" className="close-btn" onClick={()=>this.props.closeHandle(false)}/>:null


                    }
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}