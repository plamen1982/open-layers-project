import React, { useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
const useCreateMap = () => {
    const [map, setMap] = useState(new Map());
    useEffect(() => {
            const newInstanceMap = new Map({
            target: 'map-container',
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([37.41, 8.82]),
                zoom: 5
            })
        });
        setMap(newInstanceMap)
     }, [])

    return { map }
};

export default useCreateMap;