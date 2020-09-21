import React from 'react';
import style from './PomodoroTimer.module.css';
import BreakInterval from './Components/BreakInterval';
import SessionLength from './Components/SessionLength';
import Timer from './Components/Timer';
import profile from './Components/assets/profile.jpeg'

class PomodoroTimer extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25 ,
      isPlay: false
    }
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }
  
  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if(isSession){
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

render() {
  return (
    <main className = {style.main}>
      <div className = {style.options}>
      <h2 className = {style.title}>Pomodoro Timer</h2>
      <div className = {style.info}>
      <p className = {style.paraph}>
        The <a href = "https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomodoro Technique</a> is a time management method originally
        developed by Francisco Cirillo. 
      </p>
      <h4 className = {style.howTo}>How does it work?</h4>
      <p className = {style.instructions}>
         Focus hard during 25 minutes and get down to business. Then take a short 5 minute break.
         After 4 Pomodoro Sessions, stop the clock and take a long break of 25 minutes.
      </p>
      </div>
      <div className = {style.flex}>
      <BreakInterval
      isPlay = {this.state.isPlay}
      breakInterval = {this.state.breakLength}
      increaseBreak = {this.onIncreaseBreakLength}
      decreaseBreak = {this.onDecreaseBreakLength}/>
      <SessionLength
      isPlay = {this.state.isPlay}
      sessionLength = {this.state.sessionLength}
      increaseSession = {this.onIncreaseSessionLength}
      decreaseSession = {this.onDecreaseSessionLength}
      />
      </div>
      <div className = {style.credits}>
      <p>Developed by <a href="https://www.linkedin.com/in/luccalipisky/" target="_blank">Lucca Lipisky</a> | Full Project <a href = "https://github.com/luccalipisky/PomodoroTimer" target="_blank">here</a></p>
      </div>
      </div>
      <div className = {style.container}>
      <Timer
      timerMinute = {this.state.timerMinute}
      breakLength = {this.state.breakLength}
      updateTimerMinute = {this.onUpdateTimerMinute}
      toggleInterval = {this.onToggleInterval}
      resetTimer = {this.onResetTimer}
      onPlayStopTimer = {this.onPlayStopTimer}
      />
      </div>
    </main>
  );
}
}

export default PomodoroTimer;
