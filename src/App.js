/*
App Name: CALKKY
Code By: ceofred;
OpenSource;
FinishedOn:Monday 20th August,2018.7:05pm;
simple calculator,could come in handy when calculators go on exile.

*/
import React, { Component } from 'react';
import './App.css';
import Button from "./components/Buttons";

class App extends Component {
constructor(props){
  super(props);

    this.state={
      value:''
    }
    this.btnClick = this.btnClick.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onDel = this.onDel.bind(this);
    this.onEval = this.onEval.bind(this);
}
onEval(){
this.setState(
(prev) =>({
    value: eval(prev.value).toString()
})
);
}
onDel(){
    this.setState(
    (prev)=>({
        value: prev.value.length <= 1 ? '0': prev.value.slice(0,-1)
    })
    );
}
btnOps(v)
{
   const fvalue = this.state.slice();
    alert(v);
}
 btnClick(v){
    this.setState((prev)=> ({
// use this function to add to states. the previous state is not removed
// new stuffs are rather added to the state
        value: prev.value + v
    }));
  }
  onClear(){
      this.setState({value:''});
  }

render() {
return (
  <div className="cal-title">
  <h3>CALKKY</h3>
    <input type="text" value={this.state.value} disabled={true} />

    <Button btnClick={this.btnClick} num="1" />
    <Button btnClick={this.btnClick} num="2" />
    <Button btnClick={this.btnClick} num="3" />
    <Button btnClick={this.btnClick} num="4" />
    <Button btnClick={this.btnClick} num="5" />
    <Button btnClick={this.btnClick} num="6" />
    <Button btnClick={this.btnClick} num="7" />
    <Button btnClick={this.btnClick} num="8" />
    <Button btnClick={this.btnClick} num="9" />
    <Button btnClick={this.btnClick} num="0" />
    <Button btnClick={this.btnClick} num="-" />
    <Button btnClick={this.btnClick} num="+" />
    <Button btnClick={this.btnClick} num="*" />
    <Button btnClick={this.btnClick} num="/" />
        <Button btnClick={this.btnClick} num="%" />
        <Button btnClick={this.btnClick} num="^" />
    <button onClick={this.onClear}>Clear</button>
    <button onClick={this.onDel}>Delete</button>
    <button onClick={this.onEval}>=</button>
  </div>
);
}
}

export default App;
