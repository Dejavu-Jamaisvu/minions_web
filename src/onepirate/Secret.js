import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';
// import secret from './modules/views/secret.md';
import ProductSmokingHero from './modules/views/ProductSmokingHero';

const backgroundImage = 'https://via.placeholder.com/'; 

function Secret() {
  return (
    <React.Fragment>
    <AppAppBar />
      <Box
        sx={{
          mt: 7,
          mb: 12,
          background: `url(${backgroundImage})`, // Set background image
          backgroundSize: 'cover', // Cover the entire box
          backgroundPosition: 'center', // Center the background image
          minHeight: '500px', // Set a minimum height to ensure content is visible
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <Container>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Secret Page
          </Typography>
            {/* <Markdown>{secret}</Markdown> */}

          <ProductSmokingHero />
      </Container>
    </Box>

    <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Secret);
