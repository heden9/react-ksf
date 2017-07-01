import React from 'react';
import './style.scss';
import Box from '../../components/luckBox';
import LoadIcon from '../../components/load';
import { getPrizeInfo } from '../../fetch/getPrizeInfo';
import { Luck } from '../../fetch/luck';
import { Link } from 'react-router';
export default class luckPage extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            isOK: false,
        };
    }
    componentDidMount(){
        const result = getPrizeInfo();
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(json == null || json.data.length != 12)
                    return;
                this.setState({
                    isOK: true,
                    ...json
                })
            })
            .catch(()=>{
                console.log('err');
            })
    }
    luckyDraw = (callback) => {
        const result = Luck();
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(!json){
                    return;
                }
                console.log(json);
                let tmp;
                for(let i = 0,len = this.state.data.length-1; i < len; i++){
                    if(json.id == this.state.data[i].id)
                        tmp = i;
                }
                callback && callback(tmp);
            })
            .catch(()=>{
                console.log('err');
            })
    };
    render(){
        return (
            <div id="luck-container">
                <div id="luck-head"></div>
                {
                    this.state.isOK ?
                        <div id="luck-content">
                            <Box
                                luckyDraw={this.luckyDraw}
                                data={this.state.data}/>
                            <p style={{textAlign: 'right'}}>
                                <Link>查看奖品</Link>
                            </p>
                            <div className="luck-dec-area">
                                <p>1.活动有效时间：</p>
                                <p>&emsp;{this.state.startTime}&nbsp;至&nbsp;{this.state.endTime}</p>
                                <p>2.活动说明：</p>
                                <p>&emsp;{this.state.dec}</p>
                                <p>3.发行方：</p>
                                <p>&emsp;{this.state.from}</p>
                                <p>备注：中奖积分请到<Link>会员中心</Link>查看；</p>
                            </div>
                        </div> : <LoadIcon/>
                }
            </div>
        )
    }
}