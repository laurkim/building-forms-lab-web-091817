import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map(band => {
      return <li>{band}</li>
    });

    return (
      <div>
        band input
        {bands}
      </div>
    );
  }
};

export default Bands;
