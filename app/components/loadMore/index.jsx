import React from 'react';
import waveIcon from '../../static/img/wave.svg';
import './style.scss';
export default class loadMore extends React.PureComponent{
    componentDidMount(){
        const loadMoreNode = this.refs.loadMore;
        const loadFN = this.props.getInfo;
        let timerId;
        //截流
        function callback() {
            const clientTop = loadMoreNode.getBoundingClientRect().top;
            const windowHeight = window.screen.height * window.dpr;
            if(clientTop && clientTop < windowHeight){
                loadFN();
            }
        }
        window.addEventListener('scroll', () => {
            if(!this.props.isOK)
                return;
            if(timerId)
                clearTimeout(timerId);
            timerId = setTimeout(callback, 50);

        },false);
    }
    render(){
        return (
            <div
                ref="loadMore"
                className="load-more">
                {
                    this.props.isOK?
                        <div style={{height: 50}}></div>:
                        <img src={waveIcon} alt=""/>
                }
            </div>
        )
    }
}