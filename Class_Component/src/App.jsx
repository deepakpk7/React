import React from "react";

// class App extends React.Component{
//   render(){
//     return(
//       <h2>Welcome Rect Class Component</h2>
//     )
//   }
// }
class App extends React.Component{
  constructor(props){
    super()   
    this.state={
      color:'red',
      size:'400',
      name:props.name,
    }
  }
  render(){
    return(
    <div>
      <h1>Welcome Rect Class Component</h1>
      <p>{this.state.color}</p>
      <p>{this.state.size}</p>
      <p>{this.state.name}</p>
    </div>
    )
  }
}
export default App


