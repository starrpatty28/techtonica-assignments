import React, { Component} from 'react'

export default class CreateEvents extends Component {
  constructor(props) {
    super(props);

    //state is how you create variables in react
    this.state = {
      username: '',
      event: '',
      users: []
    }
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

  render() {
    return (
      <div>
        <p>You are on the Create Events component! </p>
      </div>
    )
  }
} 

