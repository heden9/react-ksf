import React from 'react';
import './style.scss';
import Drum from '../../static/img/Drum.png';
import LoadingImg from '../../static/img/loading.svg';
export default class personalPage extends React.PureComponent{
    render(){
        const props = this.props;
        const imgURL = props.headimgurl || Drum;
        return (
            <div id="person-area">
                <div className="head-portrait">
                    <img src={imgURL} alt=""/>
                </div>
                    {
                        props.isOK?
                          <div className="custom-box">
                              <h5 className="name">{props.user && props.user.nickname}</h5>
                              <div className="score"
                                   onClick={() => props.changeNowAdd('SCOREDETAIL')}>
                                  <h5>{props.user.score}</h5>
                                  <h5>我的积分</h5>
                              </div>
                              <div className="score-level">
                                  <h5>{props.user.myscoretop}</h5>
                                  <h5>积分排名</h5>
                              </div>
                          </div>
                        : <img src={LoadingImg} alt="" className="loading-icon"/>
                    }
            </div>
        )
    }
}