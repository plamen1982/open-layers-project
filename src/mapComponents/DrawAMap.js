import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const DrawAMap = () => { 
    useEffect(() => { 
        new Map({
            target: 'map-container',
            layers: [
                new Tile({  
                source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([37.41, 8.82]),
                zoom: 1
            })
        });
    }, [])
    return <div id="map-container" style={{width:400, height: 400}}></div>;
}


export default DrawAMap;