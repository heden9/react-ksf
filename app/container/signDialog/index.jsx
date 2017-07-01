import React from 'react';
import Dialog from '../../components/dialog';
import './style.scss';
import LoadIcon from '../../components/load';
import { signIn } from '../../fetch/sign/sign';
import USERSTORE from '../../store';
import SignDetail from '../../components/signDetail';
export default class signDialog extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            isOK: false
        }
    }
    componentDidMount(){
        const result = signIn();
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(json == null)
                    return;
                USERSTORE.addSignInfo(json);
                let myColor = { background: '#0E1717', text: "#FFFFFF" };
                if(json.is_check === 1){
                    this.props.toast('您今天已经签到过了','error',1000,myColor);
                }else if(json.is_check === 2){
                    this.props.toast('签到成功','success',1000,myColor);
                }
                this.setState({
                    isOK: true
                })
            })
            .catch(()=>{
                console.log('err');
            })
    }
    render(){
        const style = {
            justifyContent: 'center',
            alignItems: 'center'
        };
        return (
            <Dialog
                needBtn={false}
                style={style}
                closeHandle={this.props.displaySignIn}>
                {
                    this.state.isOK ?
                        <SignDetail data={USERSTORE.signInfo}/>:
                        <LoadIcon/>
                }
            </Dialog>
        )
    }
}