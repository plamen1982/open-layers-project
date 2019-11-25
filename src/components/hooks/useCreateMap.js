import  { useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

/**
 * @param  {string} containerName
 * @param  {number} zoom
 * @param  {array:[number, number]} center
 * @returns {object} map - returns new instance of the map
 */
const useCreateMap = (containerName, zoom, center) => {
    const [map, setMap] = useState(new Map());
    useEffect(() => {
            const newInstanceMap = new Map({
            target: containerName,
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat(center),
                zoom
            })
        });
        setMap(newInstanceMap)
     }, [])

    return { map }
};

export default useCreateMap;