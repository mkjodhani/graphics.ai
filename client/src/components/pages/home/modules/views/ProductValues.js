import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { useNavigate } from 'react-router-dom';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/graphicsAI/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item} onClick={() => navigate('/editor')}>
              <Box
                component="img"
                src="/static/themes/graphicsAI/productValues2.png"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Set up geometry
              </Typography>
              <Typography variant="h5">
                {
                  'Using provided 3D editor, user can add different geometry such as plane, cube, text, cone, torus, etc.'
                }
                {' Also user is able to customize the texture of any 3D object.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item} onClick={() => navigate('/textureUtils')}>
              <Box
                component="img"
                src="/static/themes/graphicsAI/productValues1.png"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Make your own texture
              </Typography>
              <Typography variant="h5">
                {
                  'Create different textures using provided editor which allows users to have'
                }
                {
                  ' extraordinary experience.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item} onClick={() => alert('yet to be linked!')}>
              <Box
                component="img"
                src="/static/themes/graphicsAI/productValues3.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Export 3D Objects
              </Typography>
              <Typography variant="h5">
                {'By using export and import feature user will be able to import'}
                {'different texture and 3D objects from different community tools like Blender.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
