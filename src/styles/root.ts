import { createTheme } from '@mui/material/styles';

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
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: '#666666',
          fontSize: 16,
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'static',
          backgroundColor: 'transparent',
          paddingBlock: 20,
        }
      }
    },
    // tab buttons
    MuiTabs: {
      defaultProps: {
        sx: {
          padding: 2,
          backgroundColor: 'Background',
          '&& .Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'Background',
          },
        }
      },
      // variants: [
      //   {
      //     props: {variant: 'standard'},
      //     style: {
      //       padding: 0,
      //       margin: 0,
      //       boxSizing: 'border-box',
      //       borderColor: 'ActiveBorder',
      //       borderWidth: 20,
      //     }
      //   },
      // ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // backgroundColor: 'Background',
        }
      },
    },
    // buttons
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: 0,
          paddingBlock: 1,
          paddingInline: 4,
        }
      },
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          textTransform: 'none',
        }
      },
      variants: [
        {
          props: {variant: 'contained'},
          style: {
            color: '#FFFFFF',
            borderRadius: '0px',
            boxShadow: 'none',
          }
        },
        {
          props: {variant: 'outlined'},
          style: {
            color: 'secondary.main',
            backgroundColor: 'Background',
            '&:hover': {
              backgroundColor: 'Background', // Change background on hover
              // Add other hover styles (e.g., border, text color)
            },
          }
        }
      ]
    },
    // input
    MuiInputLabel: {
      defaultProps: {
        sx: {
          // fontSize: 12,
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          '& fieldset': { borderWidth: 0, borderRadius: 0 },
          '&:hover fieldset': { border: 0 },
          '&.Mui-focused fieldset': { borderWidth: 0 },
        }
      },
      variants: [
        {
          props: {variant: 'outlined'},
          style: {
            borderBottomWidth: 0,
          }
        }
      ]
    },
    // Select
    MuiNativeSelect: {
      defaultProps: {
        sx: {
          // fontWeight: 'medium',
          width: '100%',
          // paddingBlock: 1,
        }
      },
      variants: [
        {
          props: {variant: 'standard'},
          style: {
            // borderBottomWidth: 0,
            alignItems: 'center'
          }
        }
      ]
    },
    MuiSelect: {
      defaultProps: {
        sx: {
          fontWeight: 600,
          width: '100%',
          color: 'secondary.main',
          '.MuiOutlinedInput-notchedOutline': { borderWidth: 0 }, 
        }
      },
    },
    // icon button
    MuiIconButton: {
      defaultProps: {
        sx: {
          backgroundColor: 'Background',
          borderRadius: 0,
          boxShadow:
          `0px 0px 4.4px rgba(0, 0, 0, 0.01),
          0px 0px 12.3px rgba(0, 0, 0, 0.015),
          0px 0px 29.5px rgba(0, 0, 0, 0.02),
          0px 0px 98px rgba(0, 0, 0, 0.03)`,
          ':hover' :{
            borderWidth: 0,
            backgroundColor: 'primary.main',
            color: 'Background',
          },
          '.Mui-ButtonBase-focusVisible': {
            // backgroundColor: 'primary.main',
            backgroundColor: 'primary',
          },
        }
      }
    },
    // grid
    MuiGrid: {
      defaultProps: {
        sx: {
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
        }
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'body1' },
          style: {
            color: 'secondary',
            fontSize: 18,
          }
        },
        {
          props: { variant: 'body2' },
          style: {
            color: '#666666',
            fontSize: 18,
          }
        },
        {
          props: { variant: 'caption'},
          style: {
            fontWeight: 700,
          }
        },
        {
          props: { variant: 'h2'},
          style: {
            fontSize: 48,
          }
        },
        {
          props: { variant: 'h3'},
          style: {
            fontSize: 48,
          }
        },
        {
          props: { variant: 'h6'},
          style: {
            fontSize: 24,
            fontWeight: 700,
          }
        }
      ]
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          position: 'absolute',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'rgb(255, 255, 255, 0.9)',
          width: '96%',
          padding: 20,
          margin: 20,
          bottom: 0,
          boxSizing: 'border-box',
          // sx={{ position: 'absolute', backgroundColor: 'Background', width: '90%', bottom: '3.5%', marginInline: '3.5%'}}
        }
      }
    },
  }
});