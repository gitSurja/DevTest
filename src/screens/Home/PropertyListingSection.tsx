import { Box, CardMedia, Container, Grow, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { iconSet } from '../../utils/data';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function PropertyListing() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageIndex = () => {
    if (imageIndex === 0) {
      setImageIndex(3);
    } else if (imageIndex === 3) {
      setImageIndex(0);
    }
  };

  return (
    <Container sx={{ backgroundColor: 'rgba(35, 53, 67, 0.02)', minWidth: '100%'}}>
      <Container maxWidth={'xl'}>
        <Stack flexDirection={{ xs: 'column', md: 'row'}} gap={{ xs: 0, lg: 5}} sx={{  width: '100%', paddingBlock: 10 }}>
          <Stack sx={{flexDirection: 'column', flex: 1, justifyContent: 'space-between' }} gap={{ xs: 2, md: 5}}>
            {/* TEXT CONTENT */}
            <Stack gap={2} sx={{ height: '100%' }}>
              <Typography color={'primary'} fontWeight={700} variant='caption'>Sell or Rent your property</Typography>
              <Typography variant='h3' fontWeight={700}>Property owners get free posting when they register</Typography>
              <Typography variant='body2' >Post your residential / commercial property.</Typography>
            </Stack>
            {/* ICONS */}
            <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ alignItems: 'flex-start', height: '50%' }}>
              {iconSet.slice(imageIndex, imageIndex + 3).map((item, index) => (
                <Box key={index} flexDirection={'column'} sx={{ flex: 1 }}>
                  <Box>
                    <img src={item.icon} />
                  </Box>
                  <Box>
                    <Typography variant='body1'>{item.label}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
            {/* BUTTONS  md */}
            <Stack gap={2} sx={{ flexDirection: 'row', display: { xs: 'none', md: 'flex'}}}>
              <IconButton aria-label='Left-icon' onClick={() => handleImageIndex()}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton aria-label='Right-icon' onClick={() => handleImageIndex()}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </Stack>
          </Stack>
          {/* IMAGES */}
          <Stack sx={{flex: 2, flexDirection: 'row', justifyContent: 'space-between' }} gap={{ xs: 0, md: 2}}>
            {iconSet.slice(imageIndex, imageIndex + 3).map((item, index) => (
              <Grow in key={index}>
                <CardMedia
                  sx={{ height: 400, minWidth: 170, width: '100%', marginTop: { xs: 2, md: index % 2 === 0 ? 20 : 0},
                }}
                  image={item.imageUrl}
                  title={item.label}
                />
              </Grow>
            ))}
          </Stack>
          {/* BUTTONS */}
          <Stack sx={{ justifyContent: 'space-between', paddingTop: 2,width: '100%', flexDirection: 'row', display: { xs: 'flex', md: 'none'}}}>
            <IconButton aria-label='Left-icon' onClick={() => handleImageIndex()}>
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton aria-label='Right-icon' onClick={() => handleImageIndex()}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}

export default PropertyListing;