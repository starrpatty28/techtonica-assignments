import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => (
  <tr>
    <td>{props.event.username}</td>
    <td>{props.event.events}</td>
    <td>
      <Link to={"/edit/"+props.event._id}>edit</Link> | <a href="# " onClick={() => { props.deleteEvent(props.event._id) }}>delete</a>
    </td>
  </tr>
)

export default class EventList extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this)

    this.state = {event: []};
  }

  componentDidMount() {
    axios.get('http://localhost:6000/events/')
      .then(response => {
        this.setState({ event: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteEvent(id) {
    axios.delete('http://localhost:6000/events/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      event: this.state.event.filter(el => el._id !== id)
    })
  }

  eventList() {
    return this.state.event.map(currentevent => {
      return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Event</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            { this.eventList() }
          </tbody>
        </table>
      </div>
    )
  }
}
