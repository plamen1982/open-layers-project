import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import useCreateMap from '../../hooks/useCreateMap';
import RadioGroup from '../../common/RadioGroup/RadioGroup';
import Selects from '../../common/Selects/Selects';
const DrawAMap = () => { 
    
    const [zoom, setZoom] = useState(5);
    const [center, setCenter] = useState([37.41, 8.82]);
    const map = useCreateMap('map-container', zoom, center);
    console.log(map);
    useEffect(() => { 
        setZoom(7);
        setCenter([37.00, 8.00]);
     }, [zoom, center])
    return (
        <Container style={{paddingTop: 50}}>
            <Grid container spacing={5}>
                <Grid md={6} item>
                    <RadioGroup />
                    <Selects />
                </Grid>
                <Grid md={6} item id="map-container"/>
            </Grid>
        </Container>
    );
}


export default DrawAMap;