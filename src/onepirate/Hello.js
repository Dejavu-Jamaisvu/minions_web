import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';
import secret from './modules/views/secret.md';
import ProductHeroLayout from './modules/views/ProductHeroLayout';
import Button from './modules/components/Button';

const backgroundImage =
  'https://img.freepik.com/free-photo/student-social-internet-home-profession_1286-304.jpg?w=1380&t=st=1701106484~exp=1701107084~hmac=1e6711a744aff1b58b9bee432f2d615a95d621c68f37fb6086ce78707ef636d2';

function Hello() {
  return (
    <React.Fragment>
      <AppAppBar />


        <ProductHeroLayout
          sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
          }}

    >
        <Container>
          <Box sx={{ mt: 7, mb: 12 }}>
            <Typography color="inherit" variant="h3" gutterBottom marked="center" align="center">
              환영합니다!
            </Typography>
            <Markdown>{secret}</Markdown>
          </Box>
          
          <Button
            color="secondary"
            variant="contained"
            size="large"//https://sdevtest.genians.kr:30001/realms/minions/protocol/openid-connect/logout?redirect_uri=http://sdevtest.genians.kr:30003
            component="a" ////https://sdevtest.genians.kr:30001/realms/minions/protocol/openid-connect/logout?redirect_uri=http://localhost:3000
            href="https://sdevtest.genians.kr:30001/realms/minions/protocol/openid-connect/logout"///logout-confirm?client_id=kevin
            sx={{ minWidth: 200 }}
          >
            logout
          </Button>
        </Container>

      </ProductHeroLayout>
      
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Hello);
