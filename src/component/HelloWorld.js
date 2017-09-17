import React from 'react';



class HelloWorld extends React.Component{
  constructor(props){
    super(props);

    // this.state={message:'Hello'};
  }

  // helloWorld(){
  //   this.setState({message:'Hello World'});
  // }
  render(){
    return(
      <div>
        <h1>{this.props.message}</h1>
        <button onClick={(e)=>this.props.onHelloBtnClick(e)}>Click to show Hello World</button>
      </div>
    );
  }

}


export default HelloWorld;