import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <h1>{text}</h1>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 52, lng: 0},
    zoom: 6
  };

  render() {
    return (
      <GoogleMapReact
        google={window.google}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key: 'HIDDEN KEY'
        }}
      >
        <AnyReactComponent
          lat={this.props.center.lat}
          lng={this.props.center.lng}
          text={'MOTHER ENGLAND'}
        />
      </GoogleMapReact >
    );
  }
}

export default SimpleMap
