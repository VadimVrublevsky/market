import React from "react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Routes from "./modules/Routes";
import { theme } from "./theme";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
