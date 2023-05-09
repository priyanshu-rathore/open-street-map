import React, { useEffect, useRef, useState } from 'react'
import { MapContainer,TileLayer,useMapEvents,Popup,Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import img from '../../img/location.png'
import "./Map.css"
import { Icon } from 'leaflet'
import { reverseGeocode } from '../../services/reverseGeoCoding'

function LocationMarker() {
  const [position, setPosition] = useState([])
  const icon = new Icon({
    iconUrl:img,
    iconSize:[25,38]
  })

  const loadData = async(lat,lng) => {
    let response = await reverseGeocode(lat,lng)
    console.log(response)
  }

  useEffect(()=>{
      position.length > 0 && loadData(position[position.length-1].lat,position[position.length-1].lng)
   
  },[position])

  useMapEvents({
    click(e) {
      setPosition([...position,e.latlng])
      console.log(e.latlng)
    }
   
  })

  return position.length > 0 ? position.map((marker)=>(
    <Marker icon={icon} position={marker}>
      <Popup>Iam a popup</Popup>
    </Marker>
  )) : null
}

const Map = () => {
    const [center,setCenter] = useState([23.1294,83.1861])
    const [zoom,setZoom] = useState(9)
    
  return (
    <div>
        <MapContainer center={center} zoom={zoom}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
        </MapContainer>
    </div>
  )
}

export default Map