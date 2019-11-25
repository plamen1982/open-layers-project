import React from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import useCreateMap from '../../hooks/useCreateMap';
import RadioGroup from '../../common/RadioGroup/RadioGroup';
import Selects from '../../common/Selects/Selects';
const DrawAMap = () => { 
    useCreateMap('map-container');
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