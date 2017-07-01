import React from 'react';
import LoadImg from '../../static/img/loading.svg';
import './style.scss';
export default function loadIcon (props) {
    return(
        <div className={'loadIcon'}>
            <img src={LoadImg} alt="" className={props.className}/>
        </div>
    )
}