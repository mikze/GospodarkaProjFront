import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../style.css'

export default class MapExample extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 2,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
            </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}