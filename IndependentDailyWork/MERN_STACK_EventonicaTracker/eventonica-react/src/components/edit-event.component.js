import React, { Component} from 'react'
import axios from 'axios';

export default class EditEvents extends Component {
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

    axios.get('http://localhost:5000/events/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        username: response.data.username,
        event: response.data.event,
      })   
    })
    .catch(function (error) {
      console.log(error);
    })


    axios.get('http://localhost:5000/users/')
    .then(response => {
      if(response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
        })
      }
    })
    // .catch((error) => {
    //   console.log(error);
    // })
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

  axios.post('http://localhost:5000/events/update/'+this.props.match.params.id, event)
  .then(res => console.log(res.data));

 // window.location = '/'
 
 alert('Your user')

}

  render() {
    return (
      <div>
      <h3>Edit Event Log</h3>
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
          <input type="submit" value="Edit Event Log" className="btn btn-primary" />
        </div>
       </form>
     </div>  
    )
  }
} 

