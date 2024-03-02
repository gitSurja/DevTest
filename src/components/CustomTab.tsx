import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Container, Divider, Grid, IconButton } from '@mui/material';
import { LocationIcon } from './CustomIcons';
import { priceRangeData, propertyTypeData } from '../utils/data';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
import { getCurrentLocation } from '../utils/helper';

interface TabPanelProps {
  children?: React.ReactNode;
  index?: number;
  value?: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      maxWidth={'lg'}
      zIndex={8}
      sx={{
        backgroundColor: 'Background',
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{
          paddingBlock: 5,
          paddingInline: 3,
          boxShadow:
              `0px 0px 4.4px rgba(0, 0, 0, 0.01),
              0px 0px 12.3px rgba(0, 0, 0, 0.015),
              0px 0px 29.5px rgba(0, 0, 0, 0.02),
              0px 0px 98px rgba(0, 0, 0, 0.03)`,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

interface CustomTabProps {
  tabHeaderData?: []
  type?: string
}
export const CustomTab = ({tabHeaderData}: CustomTabProps) => {
  const [tabValue, setTabValue] = React.useState(0);
  // form state
  const [location, setLocation] = React.useState('');
  const [propertyType, setPropertyType] = React.useState(propertyTypeData[0].value);
  const [priceRange, setPriceRange] = React.useState(priceRangeData[0].value);
  
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (data: any) => {
    const reqmodel = {
      location: data.location,
      propertyType: data.propertyType,
      priceRange: data.priceRange
    }
    return reqmodel;
  };

  return (
    <Container maxWidth={'lg'}>
      <Box width={'fit-content'}>
        <Tabs value={tabValue} onChange={handleChangeTab} aria-label="basic tabs example"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: { display: 'none' }
          }}>
          {tabHeaderData && tabHeaderData?.map(item => {
            return <Tab defaultChecked label={item.label} />;
          })}
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Grid container justifyContent={'space-between'} gap={{ sm: 2, md: 0}} flexDirection={{ xs: 'column', md: 'row'}}>
          <Grid item sx={{ display: 'flex', width: { sm: '100%', md: 'auto'} }}>
            <CustomInput id="location-input" label="Locations" placeholder={'Enter your locations'}
              value={location}
              onChange={setLocation}
              endIconComponent={
                <IconButton onClick={getCurrentLocation} sx={{boxShadow: 'none', backgroundColor: 'transparent'}}>
                  <LocationIcon />
                </IconButton>}
            />
          </Grid>
          <Divider orientation="vertical" variant="fullWidth" flexItem />
          <Grid item sx={{ alignItems: 'center', width: { sm: '100%', md: 'auto'} }} >
            <CustomSelect defaultValue={propertyTypeData[0].value} value={propertyType} onChange={setPropertyType} label={'Property Type'} data={propertyTypeData} id={'property-type'} />
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid xs={5} item sx={{display: 'flex', alignItems: 'center', flexDirection: {sm:'column' ,md: 'row'}, minWidth: {sm: '100%', md: 'auto'}}}>
            <CustomSelect defaultValue={priceRangeData[0].value} value={priceRange} onChange={setPriceRange} label={'Price Range'} data={priceRangeData} id={'price-range'} />
            <Button onClick={() => handleSubmit({location, propertyType, priceRange})} variant={'contained'}>Search</Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Content for Tab 3
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Content for Tab 4
      </TabPanel>
    </Container>
  );
};
