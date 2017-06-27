import React from 'react';
import PersonalPage from '../../components/personalPage';
import BtnGroup from '../../components/btnGroup';
import './style.scss';
export default class Home extends React.PureComponent{
    render(){
        return (
            <div>
                <PersonalPage/>
                <BtnGroup/>
            </div>
        )
    }
}