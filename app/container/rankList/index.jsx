import React from 'react';
import './style.scss';
import LoadMore from '../../components/loadMore';
import { getRankList } from '../../fetch/getRankList';
import RanKListMen from '../../components/rankListMenu';
import USERSTORE from '../../store';
export default class rankList extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            rankList: [],
            isOK: false,
            hasMore: true,
            start: 0
        }
    }
    componentDidMount(){
        this.getRankInfo();
    }
    getRankInfo = () => {
        this.setState({
            isOK: false
        });<q></q>
        const result = getRankList(this.state.start);
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(json == null)
                    return;
                const hasMore = json.length >= 10 ? true : false;
                this.setState({
                    rankList: this.state.rankList.concat(json),
                    start: this.state.start + 1,
                    isOK: true,
                    hasMore
                })
            })
            .catch(()=>{
                console.log('rank err');
            })
    };
    render(){
        return (
            <div id="rank-list">
                <p className="Ins-title">积分排行：</p>
                <RanKListMen
                    listInfo={this.state.rankList}/>
                {
                    this.state.hasMore ?
                        <LoadMore
                            getInfo={this.getRankInfo}
                            isOK={this.state.isOK}/>:
                        <p className="noMore">到底了</p>
                }
            </div>
        )
    }
}