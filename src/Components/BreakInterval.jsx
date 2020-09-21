import React from 'react';
import style from './Intervals.module.css';

function BreakInterval(props){
    function decreaseCounter() {
        if(props.breakInterval === 1){
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if(props.breakInterval === 15){
            return;
        }
        props.increaseBreak();
    }
    return(
        <section className = {style.container}>
            <h3 className = {style.sessionType}>Break time</h3>
            <section className = {style.flex}>
            <button className = {props.isPlay ? style.disBtn : style.btn} disabled = {props.isPlay === true ? 'true' : ''} onClick = {decreaseCounter}>-</button>
            <p className = {style.number}>{props.breakInterval}'</p>
            <button className = {props.isPlay ? style.disBtn : style.btn} disabled = {props.isPlay === true ? 'true' : ''} onClick = {increaseCounter}>+</button>
            </section>
        </section>
    )
}

export default BreakInterval;