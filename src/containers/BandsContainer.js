import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js';
import Band from '../components/Band.js';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band) => <Band key={band.name} name={band.name} />)

  addBand = (band) => {
    this.props.dispatch({ type: 'ADD_BAND', band: band })
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand}/>
        <ol>{this.renderBands()}</ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps)(BandsContainer)
