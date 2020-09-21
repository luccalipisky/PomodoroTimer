import React from 'react';
import style from './Timer.module.css';
import play from './assets/play.svg';
import stop from './assets/stop.svg';
import reset from './assets/reset.svg';
import alert from './assets/swiftly.mp3';
var Sound = require('react-sound').default;


class Timer extends React.Component {
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

   
   
   

    startTimer() {
        let intervalId = setInterval(this.decreaseTimer,1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId: intervalId
        })
    }
    
    decreaseTimer() {
        switch(this.state.timerSecond) {
            case 0:
                if(this.props.timerMinute === 0) {
                   
                    if(this.state.isSession) {
                        this.setState({
                            isSession: false
                        })
                        this.props.toggleInterval(this.state.isSession);
                        
                        
                    } else {
                        this.setState({
                            isSession: true
                        })
                        this.props.toggleInterval(this.state.isSession);
                        
                    }
                } else {
                this.props.updateTimerMinute()
                this.setState({
                    timerSecond: 59
                })
            }
                break; 
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer(false)
        this.setState({
            timerSecond: 0,
            isSession: true
        })
    }

 
 
    
    render() {
        return (
            <section className = {style.container} >
                <section >
                    <h4 className = {style.focusBreak}>{this.state.isSession === true ? 'Time to focus!' : 'Take a break!'}</h4>
                    <div className = {style.clock}>
                    <span>{this.props.timerMinute < 10 ? '0' + this.props.timerMinute : this.props.timerMinute}</span>
                    <span>:</span>
                    <span>
                    {this.state.timerSecond === 0
                    ? '00'
                    : this.state.timerSecond < 10
                    ? '0' + this.state.timerSecond
                    : this.state.timerSecond}
                    </span>
                    </div>
                </section>
                <section className = {style.btnContainer}>
                    <button className = {style.btn} onClick = {this.startTimer}> <img className = {style.icon} src = {play} alt = "" /></button>
                    <button className = {style.btn} onClick = {this.stopTimer} > <img className = {style.icon} src = {stop} alt = ""/> </button>
                    <button className = {style.btn} onClick = {this.resetTimer}> <img className = {style.icon} src = {reset}alt = ""/></button>
                    { this.props.timerMinute === 0 && (this.state.timerSecond === 1 || this.state.timerSecond === 0 ) ? <Sound
                    url={alert}
                    playStatus={Sound.status.PLAYING}
                    
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                    : null}
                
                  

                </section>
            </section>
        )
    }
}


export default Timer;