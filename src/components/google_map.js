import React from 'react';

class GoogleMaps extends React.Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  };

  render(){
    // ref allows us to directly reference the div with this.refs.map
    return <div ref="map" />;

  };
};

export default GoogleMaps;
