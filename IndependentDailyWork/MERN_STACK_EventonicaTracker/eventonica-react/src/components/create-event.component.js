import React, { Component} from 'react'

export default class CreateEvents extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    //state is how you create variables in react
    this.state = {
      username: '',
      event: '',
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    }) 
  }

onChangeUsername(e) {
  this.setState({
    username: e.target.value
  });
}

onChangeEvent(e) {
  this.setState({
    event: e.target.value
  });
}

onSubmit(e) {
  console.log('alert');
  e.preventDefault();

  const event = {
    username: this.state.username,
    event: this.state.event,
  }

  console.log(event)

 // window.location = '/'

}

  render() {
    return (
      <div>
      <h3>Create New Event Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Event: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.event}
              onChange={this.onChangeEvent}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Event Log" className="btn btn-primary" />
        </div>
       </form>
     </div> 

     
    )
  }
} 

