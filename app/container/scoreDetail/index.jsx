import React from 'react';
import ScoreMenu from '../../components/scoreMenu';
import LoadMore from '../../components/loadMore';
import './style.scss';
import { getScoreDetail } from '../../fetch/getScoreDetail';
export default class scoreDetail extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            isOK: false,
            listInfo: [],
            start: 0,
            hasMore: true
        }
    }
    componentDidMount(){
        this.getScoreDetail();
    }
    getScoreDetail = () => {
        this.setState({
            isOK: false
        });
        const result = getScoreDetail(this.state.start);
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(json == null)
                    return;
                const hasMore = json.length >= 10 ? true : false;
                this.setState({
                    isOK: true,
                    listInfo: this.state.listInfo.concat(json),
                    start: this.state.start + 1,
                    hasMore
                })
            })
    };
    render(){
        return (
            <div id="score-detail">
                <p className="Ins-title">我的积分：</p>
                <ScoreMenu
                    listInfo={this.state.listInfo}/>
                {
                    this.state.hasMore ?
                        <LoadMore
                            // getInfo={this.getScoreDetail}
                            isOK={this.state.isOK}/>:
                        <p className="noMore">没有更多数据了</p>
                }
            </div>
        )
    }
}