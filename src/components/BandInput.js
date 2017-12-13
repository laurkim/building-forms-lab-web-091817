import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
      // bands: [...this.props.store.bands, this.state.text]
    });
    this.setState({
      text: ''
    });
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label><strong>Create A Band</strong></label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={event => this.handleChange(event)}
            placeholder="Input Band Name"
          />
          <br />
          <button type="submit">Submit New Band</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
