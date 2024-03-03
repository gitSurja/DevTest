import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Box, Grid, IconButton } from '@mui/material';
import { useState } from 'react';


interface CustomCarouselProps {
  images: {
    imgPath: string;
    label: string;
    brand: string;
    type: string;
    location: string;
    priceMin: number;
    priceMax: number;
  }[];
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({images}) => {
  const [imageIndex, setImageIndex] = useState(1);
  const handleImageIndex = (value: 'prev' | 'next') => {
    if (value === 'next') {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <Card sx={{flex: 1, maxWidth: {sm: '100%', lg: '50%'}, position: 'relative', overflow: 'visible'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%'}}>
        {/* previous image */}
        <CardMedia
          sx={{ height: 400, minWidth: '50%', transform: 'translate(-110%, 12%)', position: 'absolute' , opacity: 0.4}}
          image={images[(imageIndex - 1 + images.length) % images.length]?.imgPath}
          title={images[(imageIndex - 1 + images.length) % images.length]?.label}
        />
        {/* present image */}
        <CardMedia
          sx={{ height: 500, minWidth: '100%' }}
          image={images[imageIndex]?.imgPath}
          title={images[imageIndex]?.label}
        />
        {/* next image */}
        <CardMedia
          sx={{ height: 400, minWidth: '50%', transform: 'translate(10%, 12%)', opacity: 0.4}}
          image={images[(imageIndex + 1) % images.length]?.imgPath}
          title={images[(imageIndex + 1) % images.length]?.label}
        />
        <CardContent>
          <Grid container columns={16} rowGap={3}>
            <Grid item xs={8} sx={{ flex: 1, justifyContent: 'space-between'}}>
              <Typography variant="h6" component="div">
                {images[imageIndex]?.label}
              </Typography>
              <Typography  variant="body2">
                {images[imageIndex]?.brand}
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ flex: 1, display: 'flex', justifyContent: {md: 'flex-start', lg: 'flex-end'} }}>
              <Button variant='contained'>View Result</Button>
            </Grid>
            <Grid item xs={8} sx={{ flex: 1, justifyContent: 'space-between'}}>
              <Typography variant="h6" component="div">
                {images[imageIndex]?.type}
              </Typography>
              <Typography  variant="body2">
                {images[imageIndex]?.location}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography  variant="h6" sx={{ flex: 1, display: 'flex', justifyContent: {md: 'flex-start', lg: 'flex-end'}}} fontWeight={800}>
                $ {images[imageIndex]?.priceMin.toLocaleString()} - $ {images[imageIndex]?.priceMax.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
      <CardActions sx={{
          position: 'absolute',
          justifyContent: 'space-between',
          top: '45%',
          padding: 0,
          margin: 0,
          minWidth: {sm: '100%', lg: '105%'},
          transform: {sm: 'translate(0%, 0%)', lg: 'translate(-2.5%, 0%)'},
          display: {xs: 'none', sm: 'flex'}
        }}>
        <IconButton aria-label='Left-icon' onClick={() => handleImageIndex('prev')}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton aria-label='Right-icon' onClick={() => handleImageIndex('next')}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
