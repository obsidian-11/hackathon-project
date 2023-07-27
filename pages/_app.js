import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";
import { pxToRem } from "helpers/pxToRem";
import Head from "next/head";
import "../styles/globals.css";

const spacing = {
  space: {
    2: pxToRem(2),
    4: pxToRem(4),
    8: pxToRem(8),
    12: pxToRem(12),
    14: pxToRem(14),
    16: pxToRem(16),
    18: pxToRem(18),
    24: pxToRem(24),
    28: pxToRem(28),
    32: pxToRem(32),
    36: pxToRem(36),
    42: pxToRem(42),
    48: pxToRem(48),
    52: pxToRem(52),
    56: pxToRem(56),
    60: pxToRem(60),
    64: pxToRem(64),
    72: pxToRem(72),
    80: pxToRem(80),
    96: pxToRem(96),
    120: pxToRem(120),
    180: pxToRem(180),
    240: pxToRem(240),
    300: pxToRem(300),
    360: pxToRem(360),
    440: pxToRem(440),
  },
};

const theme = extendTheme(
  { ...spacing },
  {
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
    },
  },
  {
    colors: {
      brand: {
        400: "#48BB78",
        500: "#48BB78",
      },
      black: {
        light: "#A0AEC0", // gray/400
        grayBg: "#F7FAFC",
      },
      primaryBtn: {
        bg: "brand.400", // Background color
        color: "#FFFFFF", // Text color
        hoverBg: "#38A169", // Background color on hover
        hoverColor: "#FFFFFF", // Text color on hover
      },
    },
  },
  {
    styles: {
      global: {
        body: {
          color: "#212121", // Set the desired font color here
        },
      },
    },
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>HealthHub - Personalised Healthcare</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
