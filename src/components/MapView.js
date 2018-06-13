import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup,GeoJSON} from 'react-leaflet'
import leaflet from 'leaflet'
import '../style.css'
import world from '../assets/countries';
import hash from 'object-hash';
import TableOfPlaces from './TableOfPlaces';

export default class MapView extends Component {
  
  constructor(props)
  {
    super(props)

    this.state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 2,
    range1: 1,
    range2: 3
  }
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({range1: nextProps.range1});
    this.setState({range2: nextProps.range2});
}

  render() {
    const position = [this.state.lat, this.state.lng]

    const File = this.props.file;

    const range1 = this.state.range1;
    const range2 = this.state.range2;
    

    const validatedCountries = [];

    File.countries.map(x => {

      let local = x.sentencesMap;
      let toReturn = null;
      x.count = 0;

      Object.keys(local).forEach( key => {
        if(parseInt(key) <= range2 && parseInt(key) >= range1)
        {toReturn = local[key];
          if(local[key] > x.count)
          {
            x.count = local[key];
          }
        }
      });

      if(toReturn)
        validatedCountries.push(x);  
      
        
    });

    const validatedCities = []; 
    
    File.cities.map(x => {
      let local = x.sentencesMap;
      let toReturn = null;
      x.count = 0;

      Object.keys(local).forEach( key => {
        if(parseInt(key) <= range2 && parseInt(key) >= range1)
        {toReturn = local[key];
          if(local[key] > x.count)
          {
            x.count = local[key];
          }
        }
      });

      if(toReturn)
       validatedCities.push(x);
      
    });

    let maxCountries = validatedCountries.map( country => country.totalCount).sort((x,y) => x>y )[File.countries.length -1];
    let maxCities = validatedCities.map( city => city.totalCount).sort((x,y) => x>y )[File.cities.length -1]; 
    let minCities
  
    return (
      <div>
      <Map center={position} zoom={this.state.zoom}>
        
        <TileLayer
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />

        {
          validatedCountries.map(
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

        {validatedCities.map( city => { 
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
      <TableOfPlaces
                    cities={validatedCities}
                    countries={validatedCountries}
                />
      </div>
    )
  }
}