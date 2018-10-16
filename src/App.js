import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import logo from './logo.svg';
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {

  resonseFacebook(response){
    console.log(response)
    this.setState({
      name : response.name,
      email : response.email,
      picture : response.picture.data.url
    })
  }

  constructor(props){
    super(props)
    this.state = {
      name : "eiei gum",
      email : "eiei@mail.com",
      picture : "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?cs=srgb&dl=plant-flower-bloom-36764.jpg&fm=jpg"
    }
    this.resonseFacebook = this.resonseFacebook.bind(this)
  }

  render() {
    return (
      
    <div className="App">
    <FacebookLogin 
    appId = "655943311472105"
    autoLoad = {true}
    fields="name,email,picture"
    callback = {this.resonseFacebook}
    />
      <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={this.state.picture} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{this.state.name}</p>
            <p className="subtitle is-6">{this.state.email}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
