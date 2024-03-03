import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { images } from '../../utils/data';
import { CustomCarousel } from '../../components/CustomCarousel';

function FeaturedProjects() {
  return (
    <Stack width={'100%'} sx={{ paddingBlock: {sm: 10, md: 0}}} rowGap={7}>
      <Box>
        <Typography gutterBottom variant='h3' textAlign={'center'} fontWeight={'bold'}>Featured Projects</Typography>
        <Typography  variant='body2' textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CustomCarousel images={images} />
      </Box>
    </Stack>
    

  );
}

export default FeaturedProjects;