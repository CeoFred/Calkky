import React, {Component } from 'react';

export default class Button extends Component {
    constructor(props){
        super(props);
        this.btnClick = this.btnClick.bind(this);
    };
    // sending value of the button though props
btnClick(v){
  this.props.btnClick(v);
}
render() {
return (
  <div className="title">
  {/* button text from props,defined from app.js  */}
<button onClick={(e) => this.btnClick(this.props.num)}>
{this.props.num}
</button>

  </div>
);
}
}
