import React, { useState, useEffect } from 'react';
import { Map, Marker } from 'pigeon-maps';

type Geo = [number, number]
type Props = {
    place: string;
    data: Array<any>;
}

export default function InitMap(props: Props) {
    const [center, setCenter] = useState<Geo>([-27.500207, -70.648603])
    // useEffect(()=>{
        
    // },[])
    if (props.place !== undefined) {
        props.data.forEach(gtimePlace => {
            if (gtimePlace.mainName === props.place) {
                setCenter([gtimePlace.latitud, gtimePlace.longitud])
                return (<React.Fragment>{<Map height={350} defaultCenter={center} defaultZoom={7}>
                    <Marker key={gtimePlace.hashID} width={50} anchor={[gtimePlace.latitud, gtimePlace.longitud]} />
                </Map>}</React.Fragment>)
            } else {
                return (<React.Fragment></React.Fragment>)
            }
        })
    } else {
        return (<React.Fragment>{<Map height={350} defaultCenter={center} defaultZoom={4}>
            {props.data.map(element => <Marker key={element.hashID} width={50} anchor={[element.latitud, element.longitud]} />)}
        </Map>}</React.Fragment>)
    }
    return (<React.Fragment>{<Map height={350} defaultCenter={center} defaultZoom={4}>
        {props.data.map(element => <Marker key={element.hashID} width={50} anchor={[element.latitud, element.longitud]} />)}
    </Map>}</React.Fragment>)
}