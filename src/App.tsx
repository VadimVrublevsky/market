import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>hello</div>
    </ThemeProvider>
  );
};

export default App;
