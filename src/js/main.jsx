import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let count = -1;
let digits = 6;
let soundAlarm = "nothing";
let buffer = "nothing";
let paused = false;
let countUp = true;
let countDownStart = "nothing";
let continueCount = () => {
  if (countUp) {
    count++;
  } else {
    count--;
  }
};
let changeAlarm = (event) => {
  buffer = event.target.value;
};
let confirm = () => {
  soundAlarm = buffer;
};
let startCountDown = () => {
  countDownStart = buffer;
  if (countDownStart === "nothing") {
    alert("You must input a starting value to count down from!");
  } else {
    countUp = false;
    count = countDownStart;
    count++;
  }
}
let pause = () => {
  paused = !paused;
};
let reset = () => {
  count = -1;
  buffer = "nothing"
  countUp = true;
}




let root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  if (!paused) {
    continueCount();
  }


  if (count == soundAlarm) {
    alert(`${soundAlarm} has been reached!`);
  }
  root.render(
    <React.StrictMode>
      <Home count={count} digits={digits} pause={paused} />
      <div className="row d-flex justify-content-center">
        <div className="col-1 mx-3">
          <button className="btn btn-success mb-3 mx-2" onClick={pause}>{(paused) ? "Resume" : "Pause"} Timer</button>
          <button className="btn btn-success mb-3 mx-2" onClick={reset}>Reset Timer</button>
        </div>
        <div className="col-3 mb-3">
          <span className="text-light fs-2">Timer for Alert:</span>
          <button className="btn btn-success mb-3 mx-2" onClick={confirm}>Change Alarm for Alert</button>
          <input type="number" className="form-control" placeholder="Enter positive value" onChange={changeAlarm} />
          <span className="text-light fs-2">Currently Set to: {soundAlarm}</span>
        </div>
        <div className="col-3 mb-3">
          <span className="text-light fs-2">Number to count down from:</span>
          <button className="btn btn-success mb-3 mx-2" onClick={startCountDown}>Start a count down</button>
          <input type="number" className="form-control" placeholder="Enter positive value" onChange={changeAlarm} />
          <span className="text-light fs-2">Currently set to count down from: {countDownStart}</span>
        </div>
      </div>
    </React.StrictMode>,
  )
}, 1000);



