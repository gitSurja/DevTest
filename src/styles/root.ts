import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ['Source Sans 3', 'Lato'].join(',')
  },
  palette: {
    primary: {
      main: '#FF6646',
    },
    secondary: {
      main: '#233543',
    },
    background: {
      default: '#FFFFFF',
    }
  },
  components: {
    MuiTabs: {
      defaultProps: {
        sx: {
          ".Mui-selected": {
            backgroundColor: 'primary.main',
            color: 'Background',
          },
        }
      },
      variants: [
        {
          props: {variant: 'standard'},
          style: {
          }
        },
      ],
    },
    MuiTab: {
      variants: [
        {
          props: {},
          style: {
            backgroundColor: 'Background',
          }
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'contained'},
          style: {
            color: '#FFFFFF',
            borderRadius: '0px',
            boxShadow: 'none',
          }
          
        }
      ]
    }
  }
});