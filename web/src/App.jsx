import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { AnimatePresence } from "framer-motion";

import theme from "src/assets/theme";
import "src/assets/sass/App.scss";
import DataList from "src/pages/DataList";
import Header from "src/component/Header";
import Content from "src/component/Layout/Content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Content>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={DataList} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Content>
      </Router>
    </ThemeProvider>
  );
}

export default App;
