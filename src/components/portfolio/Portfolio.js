import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({ darkMode }) {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index} display={'flex'} justifyContent={'center'}>
                       <PortfolioBlock darkMode={darkMode} image={project.image} live={project.live} source={project.source} title={project.title} imgStyle={project.imgStyle || {}} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};