import React from 'react';
import '../Introduction/style.scss';
export default class newIntroduction extends React.PureComponent{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        return (
            <div className="Introduction">
                <h5>积分说明：</h5>
                <ul>
                    <li>新会员首次关注公众号送50积分（取消后重新关注不再送积分）。</li>
                    <li>签到送积分：每日1次签到机会，可赚3积分；</li>
                    <li>活动送积分：敬请关注我们每月发布的活动，不要错过参与活动赚取更多积分的机会！</li>
                </ul>
            </div>
        )
    }
}