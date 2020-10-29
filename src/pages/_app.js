import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@styles/theme";
import "@styles/global.scss";

import LoaderPage from "@components/LoaderPage";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <LoaderPage />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
