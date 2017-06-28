import React from 'react';
import PersonalPage from '../../components/personalPage';
import BtnGroup from './btnGroup';
import DefalutIntroduction from '../../components/Introduction';
import PersonInfo from '../personInfo';
import SignInDialog from '../signDialog';
import './style.scss';
import '../../static/css/common.scss';
import USERSTORE from '../../store';
import { getUserInfo } from '../../fetch/getUserInfo';
import Notifications, {notify} from 'react-notify-toast';
import { observer } from 'mobx-react';
@observer
export default class Home extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.show = notify.createShowQueue();
        this.state = {
            nowAdd: 'HOME',
            isOK: false, //用户信息拉取完毕否
            isUserInfo: false, //显示个人资料否
            isSignIn: false //显示签到页面否
        }
    }
    changeNowAdd = (nowAdd) => {
        this.setState({
            nowAdd
        });
    };
    //显示个人资料对话框
    displayUserInfo = (isUserInfo) => {
        this.setState({
            isUserInfo
        })
    };
    //显示签到对话框
    displaySignIn = (isSignIn) => {
        this.setState({
            isSignIn
        })
    };
    renderNewxArea = () => {
        switch(this.state.nowAdd){
            case 'RANK': return ;
            case 'HOME':
            case 'INTRODUCTION':
            default: return <DefalutIntroduction info={this.state.nowAdd}/>;
        }
    };
    componentDidMount(){
        this.getUser();
    }
    //拉取用户信息
    getUser = () => {
        const result = getUserInfo();
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(json == null)
                    return;
                USERSTORE.getUserInfo(json);
                this.setState({
                    isOK: true
                })
            })
            .catch(()=>{
                console.log('err');
            });
    };
    render(){
        return (
            <div>
                <PersonalPage
                    user={USERSTORE.user}
                    isOK={this.state.isOK}/>
                <BtnGroup
                    displaySignIn={this.displaySignIn}
                    displayUserInfo={this.displayUserInfo}
                    changeNowAdd={this.changeNowAdd}/>
                {
                    this.renderNewxArea()
                }
                {
                    this.state.isUserInfo?
                        <PersonInfo displayUserInfo={this.displayUserInfo}/>
                        :null
                }
                {
                    this.state.isSignIn?
                        <SignInDialog
                            toast={this.show}
                            data={USERSTORE.signInfo}
                            displaySignIn={this.displaySignIn}/>
                        :null
                }
                <Notifications/>
            </div>
        )
    }
}