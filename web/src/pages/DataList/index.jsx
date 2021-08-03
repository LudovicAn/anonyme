import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

import Missions from "./Missions";

const DataList = () => {
  return (
    <div className="missions_list">
      <div className="container">
        <AnimateSharedLayout type="crossfade">
          <Router>
            <Route path={["/:id", "/"]} component={Missions} />
          </Router>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default DataList;
