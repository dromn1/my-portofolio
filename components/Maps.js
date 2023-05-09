import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

const markers = [
    {
        markerOffset:-18,
        name:"Saudi Arabia-Riyadh",
        coordinates: [46.71667, 24.63333],
    },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
const MapChart = () => {
  return (
    <ComposableMap>
        <ZoomableGroup center={[46, 24]} zoom={5}>
          <Geographies geography={geoUrl}
      fill="#8e88b1"
      stroke="#6b5eae"
      strokeWidth={0.8}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>  
      {
        markers.map(({name, coordinates, markerOffset})=>(
            <Marker key={name} coordinates={coordinates}>
                <circle r={4} fill="#080912" strokeWidth={2}/>
                <text textAnchor="middle" y={markerOffset} style={{fontSize:8,fill:"#080912"}}>
                {name}
                </text>
            </Marker>
        ))
      }
      {/* <Annotation subject={[46.71667,24.63333]} 
      dx={-90} dy={-30}
      connectorProps={{
        stroke:"#FF5933",
        strokeWidth: 3,
        strokeLinecap: "round"
      }} >

        <text
        style={{fontSize:4}}
         x="40"
         textAnchor="end" 
         alignmentBaseline="alphabetic" 
         fill="#F53">
          {"Saudi Arabia - Riyadh"}
        </text>

      </Annotation> */}
        </ZoomableGroup>
      
    </ComposableMap>
      );
};

export default MapChart;
