import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: 49.28525537638586, longitude: -123.12160038526493 },
        { latitude: 49.2848589696799, longitude: -123.11486394069699 },
        { latitude: 49.279784254575105, longitude: -123.10675839678467 },
        { latitude: 49.28756624826237, longitude: -123.11540429419813 },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log('You clicked me!')}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 49.2827, lng: 123.1207 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API_KEY,
})(Map);
