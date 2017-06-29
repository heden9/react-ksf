import React from 'react';
import './style.scss';
export default function defaultIntroduction (props){
    return (
        <div className="Introduction">
            <div>
                <p className="Ins-title">{props.info === 'HOME' ? '积分奖励计划：': '积分说明：'}</p>
                <ul>
                    <li>1、新会员首次关注公众号送30积分（取消后重新关注不再送）。</li>
                    <li>2、签到送积分：每日1次签到机会，可赚3积分；</li>
                    <li>3、活动送积分：敬请关注我们每月发布的活动，不要错过参与活动赚取更多积分的机会！</li>
                    {
                        props.info === 'HOME'?
                        <div>
                            <li>4、积分有效期限为2年（自积分计入会员账户之日起计算）超期未使用积分将会清零；</li>
                            <li>5、积分不可转让，不可折现；</li>
                            <li>6、不支持会员账户积分合并；</li>
                            <li>7、如遇恶意盗扫领取积分，经核实后将冻结违规者会员积分账户，直至问题处理完毕；</li>
                            <li>8、杭州顶津食品有限公司是本平台的所有者，拥有本会员系统的最终解释权。</li>
                        </div>:null
                    }
                </ul>
            </div>
        </div>
    )
}