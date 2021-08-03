import React from "react";
import { motion } from "framer-motion";

const LayoutAnimate = ({ initial, animate, exit, children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LayoutAnimate;
