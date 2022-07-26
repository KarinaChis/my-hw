import { Component } from 'react';
import './App.css';
import Form from './components/Form';
import UserProfile from './components/UserProfile';

class App extends Component{
  constructor( props ){
    super( props );
    this.state = { 
      person: {},
      isData: false
    }
  }

  onChange = ({ person, isData }) => {
    this.setState({ person: person, isData: isData})
  }
  
  render(){
    return(
      <div className = "App">
        <div className = "background">
            <Form 
              person      = { this.state.person } 
              isData      = { this.state.isData }
              className   = { (this.state.isData === true) ? "disable" : "form" }
              changeData  = { this.onChange }
            /> 
            <UserProfile 
              person    = { this.state.person } 
              className = { (this.state.isData === true) ? "form" : "disable" }
            />
        </div>
      </div>
    )
  }
}

export default App;
 