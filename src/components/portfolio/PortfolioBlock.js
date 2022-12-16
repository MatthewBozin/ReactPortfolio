import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
<<<<<<< HEAD
         <Box component={'img'} src={image} alt={'mockup'}p={'0.4rem'}/>
=======
         <Box component={'img'} src={image} alt={'mockup'} p={'0.4rem'}/>
>>>>>>> af54abd908c468d73b7ff394c3adf3eb2dc7e81a
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'3rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
