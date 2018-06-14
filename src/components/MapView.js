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
    range2: 1,
    file: props.file,
    hash: 0
  }
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({range1: nextProps.range1});
    this.setState({range2: nextProps.range2});
    this.setState({file: nextProps.file});
    this.setState({hash: nextProps.range1*nextProps.range2+Math.floor(Math.random() * 10000)});

}

  render() {
    const position = [this.state.lat, this.state.lng]
    const File = this.state.file;
    const range1 = this.state.range1;
    const range2 = this.state.range2;
    const validatedCountries = [];
    const validatedCities = []; 

    File.countries.map(x => {

      let local = x.sentencesMap;
      let toReturn = null;
      x.MaxCount = 0;
      x.TotalCount = 0;

      Object.keys(local).forEach( key => {
        if(parseInt(key) <= range2 && parseInt(key) >= range1)
        {
          toReturn = local[key];
          x.TotalCount += local[key];
          if(local[key] > x.MaxCount)
            x.MaxCount = local[key];
        }
      });
      if(toReturn)
        validatedCountries.push(x);  
    });

    File.cities.map(x => {
      let local = x.sentencesMap;
      let toReturn = null;
      x.MaxCount = 0;
      x.TotalCount = 0;

      Object.keys(local).forEach( key => {
        if(parseInt(key) <= range2 && parseInt(key) >= range1)
        {
          toReturn = local[key];
          x.TotalCount += local[key];
          if(local[key] > x.MaxCount)
            x.MaxCount = local[key];

        }
      });
      if(toReturn)
       validatedCities.push(x);
    });

    let maxCountries = validatedCountries.length > 0 ? validatedCountries.map( country => country.TotalCount).reduce((x,y) => x+y ) : 1;
    let maxCities = validatedCities.map( city => city.MaxCount).sort((x,y) => x>y )[File.cities.length -1]; 

    const map = validatedCountries.map(
      (country, i) => 
      {
        console.log(validatedCountries);
        let d = new Date();
        return (<GeoJSON key={Math.floor(Math.random() * 10000)*d.getMilliseconds()} data={world(country.name)} style={{
          fillColor: 'red',
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: ((country.TotalCount)/maxCountries)+0.07
      }} />)});

    const marker = validatedCities.map( city => { 

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
          {city.name} Liczba wystąpień: {city.TotalCount}
        </span>
      </Popup>
    </Marker>});

    return (
      <div>
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        /> 
        { map }
        { marker }
      </Map>
      <TableOfPlaces
                    cities={validatedCities}
                    countries={validatedCountries}
                />
      </div>
    )
  }
}