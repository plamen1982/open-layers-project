import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core'
import RadioGroup from '../../common/RadioGroup/RadioGroup';
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
    return (
        <Container style={{paddingTop: 50}}>
            <Grid container spacing={5}>
                <Grid md={6} item>
                    <RadioGroup />
                </Grid>
                <Grid md={6} item id="map-container"/>
            </Grid>
        </Container>
    );
}


export default DrawAMap;