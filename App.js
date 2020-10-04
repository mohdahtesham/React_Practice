import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state= {
    UserName:"Max!"
  }
  UserNameChangeHandler= (event) => {
this.setState({
UserName: event.target.value
})
    }
  render (){
    return (
      <div className="App">
  <h1>Hello,This is first React Application</h1>
  <UserInput changed={this.UserNameChangeHandler} UserName={this.state.UserName}/>
  <UserOutput UserName={this.state.UserName} />
      </div>
    );
  }
}



export default App;
