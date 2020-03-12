import React from 'react'

class Time extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            affiche: false,
            timerun: 0,
            seconds:0,
            hours:0,
            minutes:0
        }
      
        setInterval(
            () => {
            if(this.state.affiche){ 
            this.setState({
                timerun: this.state.timerun + 100
            })
            this.csToHMS(this.state.timerun)
        } 
        },
            100
            )
        }
    
    
    csToHMS = ( cs ) => {
        this.setState({
        hours: Math.floor(cs / 360000),
        minutes: Math.floor((cs - (this.state.hours * 360000)) / 6000),
        seconds: parseInt((cs - (this.state.hours * 360000) - (this.state.minutes * 6000)) / 100)
        })
    }

    Click = () => {
        this.setState( {affiche: !this.state.affiche} )
    }
  
    Reset = () => {
        this.setState({ affiche:false, runningTime: 0, seconds:0, hours:0, minutes:0 });
    };
    

    render() {
    return (<div className="timeraff">
                <div className="fullcontainer">
                    <div className="time-container">
                        <p className="timermodel">{String(this.state.hours).padStart(2, '0')}:</p>
                        <p className="time">hours</p>
                    </div>
                    <div className="time-container">
                        <p className="timermodel">{String(this.state.minutes).padStart(2, '0')}:</p>
                        <p className="time">Minute</p>
                    </div>
                    <div className="time-container">
                        <p className="timermodel">{String(this.state.seconds).padStart(2, '0')}</p>
                        <p className="time">second</p>
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={this.Click}>{this.state.affiche ? 'Stop' : 'Start'}</button>
                    <button className="btn" onClick={this.Reset}>Reset</button>
                </div>
            </div>
)
}
}

export default Time;