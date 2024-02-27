import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import { LocationIcon } from './CustomIcons';

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
      sx={{
        bgcolor: 'background.default',
        boxShadow: 3,
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

export const CustomTab = ({tabHeaderData}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth={'lg'}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: { display: 'none' }
          }}>
          {tabHeaderData && tabHeaderData?.map(item => {
            return <Tab defaultChecked label={item.label} />
          })}
        </Tabs>
      </Box>
      <Box>
      {/* {tabHeaderData && tabHeaderData?.map((item, index) => {
        return (
          <>
            <TabPanel value={value} index={index}>
              Content for Tab {index + 1}
            </TabPanel>
          </>
        )
      })} */}
        <TabPanel value={value} index={0}>
          Content for Tab <LocationIcon />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content for Tab 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content for Tab 3
        </TabPanel>
        <TabPanel value={value} index={3}>
          Content for Tab 4
        </TabPanel>
      </Box>
    </Container>
  )
}