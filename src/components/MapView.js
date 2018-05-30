import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup,GeoJSON} from 'react-leaflet'
import leaflet from 'leaflet'
import '../style.css'
import world from '../assets/countries';
import hash from 'object-hash';

export default class MapView extends Component {
  
  constructor(props)
  {
    super(props)

    this.state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 2,
  }
  }
  
  render() {
    const position = [this.state.lat, this.state.lng]

    const File = this.props.file;

    let maxCountries = File.countries.map( country => country.totalCount).sort((x,y) => x>y )[File.countries.length -1];
    let maxCities = File.cities.map( city => city.totalCount).sort((x,y) => x>y )[File.cities.length -1]; 
    let minCities
  
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
                fillColor: 'red',
                weight: 1,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: (0.5*country.totalCount)/maxCountries
            }} />)
          
        }

        {File.cities.map( city => { 
          return <Marker position={[city.latitude, city.longitude]} icon={
            
            leaflet.icon({
              iconUrl: require('../assets/images/markerIcon.png'),
              iconSize: [38, 50],
              iconAnchor: [22, 36],
              popupAnchor: [-3, -76],
              })

          } >
          <Popup>
            <span>
              {city.name} Liczba wystąpień: {city.totalCount}
            </span>
          </Popup>
        </Marker>})}
      </Map>
      </div>
    )
  }
}