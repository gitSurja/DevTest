import Box from '@mui/material/Box';
import HeroImage from './../../assets/images/Hero.png';
import { CustomTab } from '../../components/CustomTab';
import { Container, Fade, Typography } from '@mui/material';

function HeroSection() {
  const tabHeaderData=[
    {label: 'Buy'}, {label:'Rent'}, {label:'PG/Co-Living'}, {label:'Commercial'}
  ];
  return (
    <Container maxWidth={'xl'} sx={{ position: 'relative', width: '100%'}}>
      <Fade in={true} timeout={1000}>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          display: {sm: 'none', md: 'block'}
        }}
      >
        <Box sx={{ backgroundColor: 'primary.main', padding: 2, transform: 'translate(-52%, 25%)'}}>
          <Typography color={'Background'} variant='h3' fontWeight={600} textAlign={'center'}>Find Your</Typography>
        </Box>
        <Box sx={{ backgroundColor: 'secondary.main', padding: 2, transform: 'translate(52%, -25%)'}}>
          <Typography color={'Background'} variant='h3' fontWeight={600} textAlign={'center'}>Best Home</Typography>
        </Box>
      </Box>
      </Fade>
      <img src={HeroImage} alt={'heroImage'} width={'100%'} />
      <Box sx={{
        height: '100%',
        transform: {sm: 'translate(0%, 0%)', md: 'translate(0%, -65%)'}, 
        backgroundColor: 'transparent',
      }}>
        <CustomTab type={'hero-tab'} tabHeaderData={tabHeaderData} />
      </Box>
    </Container>
  );
}

export default HeroSection;