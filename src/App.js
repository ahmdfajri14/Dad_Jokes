import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      question:'',
      answer:''
    }
  }

  componentDidMount(){
    var url = 'https://safe-falls-22549.herokuapp.com/random_joke'
    
    axios.get(url)
    .then((x)=>{
      this.setState({question: x.data.setup});
      this.setState({answer: x.data.punchline});
    })
  }

  punch(){
    var url = 'https://safe-falls-22549.herokuapp.com/random_joke'
    
    axios.get(url)
    .then((x)=>{
      console.log(x.data.setup);
      console.log(x.data.punchline);

      this.setState({question: x.data.setup});
      this.setState({answer: x.data.punchline});
    })
  }

  render() {
    return (
      <div className="card mx-auto" style={{ backgroundColor: 'pink'}}>
        <div className="card text-right mx-auto mt-5" style={{width: 500, backgroundColor: 'white'}}>
          <div className="card-body">
            <h5 className="card-title">{this.state.question}</h5>
            <p className="card-text">{this.state.answer} 
            <br/>
            <i className="em em-rolling_on_the_floor_laughing"/></p>
            <button onClick={()=>{this.punch()}} className="btn btn-success center">Reload <i className="em em-repeat "/> </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;