import React from "react";
import { motion } from "framer-motion";

const CardText = (props) => {
  const {
    _id,
    data: { car, model },
  } = props;

  return (
    <motion.div className="title-container" layoutId={`title-container-${_id}`}>
      <span className="category">{model}</span>
      <h2>{car}</h2>
    </motion.div>
  );
};

export default CardText;
