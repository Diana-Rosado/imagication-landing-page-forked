import React from 'react'

import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import ControlSection from 'components/landing/ControlSection';
import IntroSection from 'components/landing/IntroSection';
import ExploreSection from 'components/landing/ExploreSection';
import EmailForm from 'components/landing/EmailForm';
import Footer from 'components/footers/Footer';
import { Grid, Box } from '@mui/material'
import MobileNavbar from '../components/navbar/MobileNavbar'
import Alert from 'components/landing/Alert';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.up('sm')]:  { 
      display: 'none'
    },
  }));



export default function Landing() {
    return (
        <>
           <Box 
                sx={{ marginBottom: 20}}
            >
                
               <ImagicationNavbar />
               <Root>
               <MobileNavbar/>
               </Root>
            </Box>
            <main>
                <Grid 
                    // container
                    // direction='colulmn'
                    // justifyContent='space-between'
                    // alignItems='stretch'
                >
                    <Grid item>
                        <ExploreSection />
                    </Grid>
                    <Grid item>
                        <IntroSection />
                    </Grid>
                    <Grid item>
                        <ControlSection /> 
                    </Grid>
                    <Grid item>
                        
                        <Alert/>
                    </Grid>
                </Grid>
            </main>
            <Footer />
        </>
    );
}
