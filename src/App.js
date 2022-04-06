import React, { Component } from 'react';
import ReactMap from 'react-mapbox-gl';

const style = "mapbox://styles/mapbox/streets-v9";

const Map = ReactMap({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

const mapStyle = {
  height: '100vh',
  width: '100vw'
};

class App extends Component {
  render() {
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
      />
    );
  }
}

export default App;
