import Box from '@mui/material/Box'
import HeroImage from './../../assets/images/Hero.png'
import { CustomTab } from '../../components/CustomTab'

function HeroSection() {
  const tabHeaderData=[
    {label: 'Buy'}, {label:'Rent'}, {label:'PG/Co-Living'}, {label:'Commercial'}
  ]
  return (
    <Box sx={{ position: 'relative', width: '100%'}}>
      <img src={HeroImage} alt="" width={'100%'}  />
      <Box sx={{ position: 'relative', height: '100%', top: -60 }}>
        <CustomTab tabHeaderData={tabHeaderData} />
      </Box>
    </Box>
  )
}

export default HeroSection