import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MyMap(origins) {
  let coord = [0,0];

  if(origins.origins.length>=1){
    origins.origins.forEach((origin,index,_)=>{
      coord[0]+=Number(origin['latitud'])
      coord[1]+=Number(origin['longitud'])
      console.log(index)
      if (index+1== origins.origins.length){
        coord = [coord[0]/origins.origins.length,coord[1]/origins.origins.length]
      }
    });
  } else {
    coord = [-33.403085,-70.57058]
  }
  console.log(coord)
  return (
    <Map height={300} defaultCenter={coord} defaultZoom={5}>
      {
        origins.origins.length>=1?
        origins.origins.map(origin=>{
          return <Marker key={origin.hashID} width={50} anchor={[Number(origin.latitud), Number(origin.longitud)]} />
        }):<Marker key={'default'} width={50} anchor={coord} />
      }
    </Map>
  )
}