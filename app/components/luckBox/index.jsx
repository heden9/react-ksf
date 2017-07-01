import React from 'react';
import LuckBtn from '../../static/img/luck/middle_button@2x.png';
import './style.scss';
export default class luckBox extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            nowActive: null
        }
    }
    //生成奖品格子，down和up 数组中index值(区间)，order: true顺时针
    renderBoxItem = (down,up,order = true) => {
        const arr = [];
        if(order){
            for(let i = down; i < up;i ++){
                const item = this.props.data[i];
                arr.push(
                    <Item nowActive={this.state.nowActive} index={i} data={item} key={i}/>
                )
            }
        }else{
            for(let i = down-1; i >= up;i --){
                const item = this.props.data[i];
                arr.push(
                    <Item nowActive={this.state.nowActive} index={i} data={item} key={i}/>
                )
            }
        }
        return arr;
    };
    clickHandle = () => {
        if(this.state.nowActive !== null)
            return;
        this.props.luckyDraw(this.startAnimation);
        // this.props.luckyDraw(this.start2);
    };
    startAnimation = (result) => {
        this.setState({
            nowActive: 0,
        });
        let index = 0;
        let interval = 100;
        let setValue = 50;
        const show = ()=>{
            if(index >= setValue - 15)
                interval += 50;
            if(index >= setValue && this.state.nowActive == result){
                alert('中奖啦'+ '          '+this.props.data[result].name);
                this.setState({
                    nowActive: null
                });
                return;
            }
            this.setState({
                nowActive: (this.state.nowActive + 1)%12
            });
            index ++;
            setTimeout(show,interval);
        };
        setTimeout(show,interval);
    };
    start2 = (result) => {
        this.setState({
            nowActive: 0,
        });
        //存入一个current时间
        let start = null;
        let interval = 50;
        let index = 0;
        let setIndex = 50;
        const requestAnimation = (timestamp) => {
            if(start === null){
                start = timestamp;
            }
            //算得间隔时间
            const progress = timestamp - start;
            if(progress >= interval){
                start = null;
                index ++;
                if(index >= setIndex - 10){
                    interval += 50;
                }
                if(index >= setIndex){
                    interval += 100;
                }
                this.render2();
            }
            if(index < setIndex || result != this.state.nowActive)
                requestAnimationFrame(requestAnimation);
            else{
                setTimeout(()=>{
                    this.setState({
                        nowActive: null
                    });
                    alert('中奖啦'+ '          '+this.props.data[result].name);
                },30);
            }
        };
        requestAnimationFrame(requestAnimation);
    };

    //渲染函数
    render2 = () => {
        this.setState({
            nowActive: (this.state.nowActive + 1)%12
        });
    };
    //卸载组件时清楚定时器
    // componentWillUnmount(){
    //     clearInterval(luckBox.timer);
    //     luckBox.timer = undefined;
    // }
    render(){
        return (
            <div className="luck-box">
                {
                    this.renderBoxItem(0,4)
                }
                <div>
                    {
                        this.renderBoxItem(12,10,false)
                    }
                </div>
                <img src={LuckBtn} alt="" className="luck-btn" onClick={this.clickHandle}/>
                <div>
                    {
                        this.renderBoxItem(4,6)
                    }
                </div>
                {
                   this.renderBoxItem(10,6,false)
                }
            </div>
        )
    }
}

const Item = (props) => {
  return (
      <div className={props.nowActive == props.index ? 'box-item active' : 'box-item'}>
          <img src={props.data.imgURL} alt={props.data.name}/>
      </div>
  )
};