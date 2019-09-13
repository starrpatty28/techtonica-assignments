import React, { Component } from "react";
import axios from "axios";

//require('dotenv').config();

//console.log(process.env);



export default class CreateEvents extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //state is how you create variables in react
    this.state = {
      username: "",
      events: [],
      users: [],
      event: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events?apikey=foMLuJ0DCrZJ24dIKYTLbDwRaWCw7BCR&keyword=music"
      )
      .then(response => {
        console.log(response.data._embedded.events);

        this.setState({
          events: response.data._embedded.events
        });
      });
 
    axios.get("http://localhost:5000/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    });

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
    console.log("alert", e.target);
    e.preventDefault();
    e.target.reset();

    const event = {
      username: this.state.username,
      event: this.state.event
    };

    console.log(event);

    axios
      .post("http://localhost:5000/events/add", event)
      .then(res => console.log(res.data));

    // window.location = '/'

    alert('You event and user has been added!')
  }

  render() {
    return (
      <div>
        <h3>Create New Event Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Event: </label>
            <select
              ref="eventInput"
              required
              className="form-control"
              value={this.state.event}
              onChange={this.onChangeEvent}
              >
              <option key="" value="">
                Select event
              </option>
              {this.state.events.map(event => (
                <option key={event.id} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Event Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
