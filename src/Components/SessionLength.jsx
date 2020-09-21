import React from 'react';
import style from './Intervals.module.css';

function SessionLength (props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    return (
        <section className = {style.container}>
            <h3 className = {style.sessionType}>Focus time</h3>
        <section className = {style.flex}>
            <button className = {props.isPlay ? style.disBtn : style.btn} disabled = {props.isPlay === true ? 'true' : ''} onClick = {decreaseSession}>-</button>
            <p className = {style.number}>{props.sessionLength}'</p>
            <button className = {props.isPlay ? style.disBtn : style.btn} disabled = {props.isPlay === true ? 'true' : ''} onClick = {increaseSession}>+</button>
        </section>
        </section>
    )
}

export default SessionLength;