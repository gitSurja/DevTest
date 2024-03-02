import { Icon } from '@mui/material';
import Down from './../assets/icons/dropdown.svg';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export const LocationIcon = () => {
  return (<MyLocationIcon color={'primary'} />);
};
export const DownIcon = () => {
  return (<Icon><img src={Down} style={{ margin: 2}}/></Icon>);
};