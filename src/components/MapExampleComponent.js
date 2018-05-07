import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup,GeoJSON} from 'react-leaflet'
import leaflet from 'leaflet'
import '../style.css'
import world from '../CountriesMap/countries';
import hash from 'object-hash';

export default class MapExample extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 2,
  }
 
  render() {

    const marker = leaflet.icon({
      iconUrl: require('../assets/markerIcon.png'),
      iconSize: [38, 50],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      });
    const position = [this.state.lat, this.state.lng]

    const File = this.props.File;
    
    return (
      <div>
      <Map center={position} zoom={this.state.zoom}>
        
        <TileLayer
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />

        {
          File.countries.map(
            (country, i) => 
            <GeoJSON key={hash(world(country.name))} data={world(country.name)} style={{
                fillColor: '#'+(Math.floor(Math.random() * 16777215) + 1).toString(16),
                weight: 1,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            }} />)
          
        }

        {File.cities.map( x => <Marker position={[x.latitude, x.longitude]} icon={marker} >
          <Popup>
            <span>
              {x.name}
            </span>
          </Popup>
        </Marker>)}
      </Map>
      </div>
    )
  }
}