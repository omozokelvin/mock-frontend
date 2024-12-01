'use client';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import {
  ColorPartial,
  PaletteColorOptions,
} from '@mui/material/styles/createPalette';
import { Inter } from 'next/font/google';
import { CSSProperties } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      // gradient: CSSProperties['backgroundImage'];
      animatedText: {
        background: CSSProperties['background'];
        WebkitBackgroundClip: CSSProperties['WebkitBackgroundClip'];
        WebkitTextFillColor: CSSProperties['WebkitTextFillColor'];
        animation: CSSProperties['animation'];
        '@keyframes gradient-text': any;
      };
      // gold: ColorPartial;
      // purple: ColorPartial;
    };
  }
  // allow configuration using `createTheme`

  interface ThemeOptions extends Partial<Theme> {}

  interface Palette {
    gold: ColorPartial;
    purple: ColorPartial;
    light: PaletteColorOptions;
  }

  interface PaletteOptions extends Partial<Palette> {}

  interface TypographyVariants {
    details: CSSProperties;
    label: CSSProperties;
  }

  interface TypographyVariantsOptions extends Partial<TypographyVariants> {}

  interface PaletteColor {
    transparent?: string;
  }

  interface SimplePaletteColorOptions extends Partial<PaletteColor> {}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    details: true;
    label: true;
  }
}

// Create a theme instance.
export const theme = createTheme({
  palette: {
    background: {
      default: '#fefcff',
    },
    primary: {
      main: '#39a7c1',
      transparent: 'rgba(231, 241, 244, 0.5)',
    },
    secondary: {
      main: '#d0c099',
      transparent: 'rgba(208, 192, 153, 0.1)',
    },
    info: {
      main: '#d0c099',
      light: '#e9f5fe',
      transparent: 'rgba(208, 192, 153, 0.1)',
    },
    error: {
      main: red.A400,
      light: '#feeceb',
      transparent: 'rgba(244, 67, 54, 0.1)',
    },
    light: {
      main: '#FAF5FF',
    },
    common: {
      black: '#1D2541',
      // white: '#F1F5F7',
      white: '#FFFFFF',
    },
    grey: {
      900: '#0E0416',
      // 800: '#2E2F35',
      100: '#F5F5F5',
    },
    text: {
      primary: '#0E0416',
    },
    gold: {
      900: '#110F08',
      800: '#413B2C',
      700: '#716750',
      200: '#EEE7D8',
      100: '#f7f4ee',
    },
    purple: {
      900: '#0E0416',
      800: '#2B0D45',
      700: '#481674',
      300: '#BB88E6',
      100: '#F3E9FB',
    },
  },
  typography: {
    fontFamily: `ClashGrotesk-Variable, ${inter.style.fontFamily}`,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '24px',
          boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
          borderRadius: '16px',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'unset',
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#737383',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          'tr td': {
            fontSize: '1rem',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          'tr th': {
            paddingTop: '16px',
            paddingBottom: 'unset',
            borderBottom: 'unset',
            fontSize: '1rem',
          },
          'tr:last-child th': {
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          fontSize: '1.125rem',
        },
        select: {
          fontSize: '1.125rem',
        },
        displayedRows: {
          fontSize: '1.125rem',
        },
        actions: {
          fontSize: '1.125rem',
          '& MuiSvgIcon-root': {
            width: '1em',
            height: '1em',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.1rem',
        },
        labelSmall: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#F5F7F9',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          height: '42px',
          padding: '10px 14px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          borderWidth: '1px',
          '& .MuiOutlinedInput-root': {
            height: '45px',
            '& fieldset': {
              borderColor: `rgba(0, 0, 0, 0.12)`,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            minWidth: 160,
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: 'currentColor',
            color: 'currentColor',
            '&:hover': {
              borderColor: 'currentColor',
              backgroundColor: 'unset',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: ({ theme }) => ({
            color: 'white',
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.main,
              backgroundColor: '#2B0D45',
            },
          }),
        },
      ],
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0 1rem',
          [theme.breakpoints.up('md')]: {
            padding: '0 4rem',
          },
        }),
      },
    },
  },
  custom: {
    // gradient: ``,
    animatedText: {
      background: 'linear-gradient(45deg, #8326d0 30%, #d0c099 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'gradient-text 10s linear infinite reverse',
      '@keyframes gradient-text': {
        '0%': {
          backgroundPosition: '0% 50%',
        },
        '100%': {
          backgroundPosition: '0% 50%',
        },
      },
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: '3rem',
  lineHeight: '72px',
  letterSpacing: '-1.5px',
  fontWeight: 500,
};

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: '3.75rem',
  lineHeight: '72px',
  letterSpacing: '-0.5px',
  fontWeight: 400,
};

theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: '3rem',
  lineHeight: '48px',
  letterSpacing: '0px',
  fontWeight: 400,
};

theme.typography.h4 = {
  ...theme.typography.h4,
  fontSize: '2.125rem',
  lineHeight: '36px',
  fontWeight: 400,
  letterSpacing: '0px',
  // [theme.breakpoints.down('md')]: {
  //   ...theme.typography.h5,
  // },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  fontSize: '1.5rem',
  lineHeight: '32px',
  fontWeight: 400,
  letterSpacing: '0.18px',
};

theme.typography.h6 = {
  ...theme.typography.h6,
  fontSize: '1.25rem',
  lineHeight: '28px',
  letterSpacing: '0.15px',
  fontWeight: 400,
};

theme.typography.body2 = {
  ...theme.typography.body2,
  fontSize: '1rem',
  lineHeight: '20px',
  letterSpacing: '0.25px',
};

theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: '1.125rem',
  lineHeight: '24px',
  letterSpacing: '0.15px',
  // [theme.breakpoints.down('md')]: {
  //   ...theme.typography.body2,
  // },
};

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontSize: '1.125rem',
  lineHeight: '24px',
  letterSpacing: '0.15px',
};

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  fontSize: '1rem',
  lineHeight: '24px',
  letterSpacing: '0.1px',
};

theme.typography.label = {
  ...theme.typography.caption,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.25px',
};

theme.typography.details = {
  ...theme.typography.caption,
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '24px',
};
