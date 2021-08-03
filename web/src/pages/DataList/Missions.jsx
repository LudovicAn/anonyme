import React from "react";
import { AnimatePresence } from "framer-motion";
import { Container } from "@material-ui/core";

import ListMission from "./ListMission";
import Details from "./Details";
import "./style.scss";

const Missions = (props) => {
  const { match } = props;

  let { id } = match.params;

  return (
    <Container maxWidth="md">
      <ListMission selectedId={id} />
      <AnimatePresence>{id && <Details id={id} key="item" />}</AnimatePresence>
    </Container>
  );
};

export default Missions;
