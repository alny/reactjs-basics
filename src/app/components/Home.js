import React from "react";

export class Home extends React.Component{
  render(){
let content = "";
  if(true){
    content = <p>Hello</p>
  }
    return(
      <div><p>In a New Component</p>
        { this.props.name }
<div>
<ul>
  {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
  <hr/>
  {this.props.children}
</ul>
</div>

  </div>
    );
  }
}
