import React from 'react';
import Dialog from '../../components/dialog';
import { getUserDetail } from '../../fetch/getUserDetail';
import './style.scss';
import LoadIcon from '../../components/load';
export default class personInfo extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            isOK: false,
            nickname: '',
            sex: 0,
            province_id: 0,
            city_id: 0,
            address: ''
        }
    }
    componentDidMount(){
        const result = getUserDetail();
        result
            .then((res)=>res.json())
            .then((json)=>{
                if(json == null)
                    result;
                this.setState({
                    ...json,
                    isOK: true,
                })
            })
            .catch(()=>{
                console.log('user err');
            })
    }
    changeHandle = (key,e) => {
          this.setState({
              [key]: e.target.value
          })
    };
    render(){
        return (
            <Dialog
                needBtn={true}
                closeHandle={this.props.displayUserInfo}
                >
                {
                   this.state.isOK ? (
                       <form name="userInfo" id="user-info">
                           <h5>个人资料</h5>
                           <ul className="user-ul">
                               <li>
                                   <label htmlFor="" >姓名</label>
                                   <input type="text"
                                          className="input-ctr" placeholder="姓名"
                                          onChange={(e)=>{this.changeHandle('nickname',e)}}
                                          value={this.state.nickname}/>
                               </li>
                               <li>
                                   <label htmlFor="">性别</label>
                                   <select name="" id="" className="input-ctr"
                                           onChange={(e)=>{this.changeHandle('sex',e)}}
                                           value={this.state.sex}>
                                       <option value="0">保密</option>
                                       <option value="1">男</option>
                                       <option value="2">女</option>
                                   </select>
                               </li>
                               <li>
                                   <label htmlFor="">联系电话</label>
                                   <input type="text" className="input-ctr" placeholder="手机号码"
                                          onChange={(e)=>{this.changeHandle('mobile',e)}}
                                          value={this.state.mobile}/>
                               </li>
                               <li>
                                   <label htmlFor="">居住地址</label>
                                   <input type="text" className="input-ctr" placeholder="居住地址"/>
                               </li>
                               <li>
                                   <label htmlFor="">详细地址</label>
                                   <input type="text" className="input-ctr" placeholder="街道门牌信息"
                                          onChange={(e)=>{this.changeHandle('address',e)}}
                                          value={this.state.address}/>
                               </li>
                           </ul>
                           <button className="default-btn">保存</button>
                       </form>
                   ): <LoadIcon/>
                }
            </Dialog>
        )
    }
}