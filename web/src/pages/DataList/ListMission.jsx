import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { data } from "./data";
import CardText from "./CardText";

import useFetch from "src/services/HookFetch";

const fadeInUp = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  init: {
    y: 15,
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

const variants = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const ListMission = (props) => {
  const { selectedId } = props;
  const [dataCar, setDataCar] = useState([]);
  const [dataSt, load] = useFetch("/cars");

  useEffect(() => {
    load();
    /* setTimeout(() => {
      setDataCar(data);
    }, 500); */
  }, []);
  useEffect(() => {
    if (dataSt.data.length > 0) {
      setDataCar(dataSt.data);
    }
  }, [dataSt.data]);

  console.log(`dataSt`, dataSt.data);

  return (
    <div className="profile">
      <motion.ul
        className="card-list"
        variants={variants}
        initial="init"
        animate={dataCar.length > 0 ? "animate" : ""}
        exit="exit"
      >
        <AnimatePresence>
          {dataCar.map((item, key) => (
            <CardItem key={key} {...item} isSelected={item.id === selectedId} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

function CardItem(props) {
  const { _id, car, model } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${_id}`);
  };
  return (
    <motion.li className="card" variants={fadeInUp}>
      <motion.div className="card-content-container" onClick={handleClick}>
        <motion.div className="card-content" layoutId={`card-container-${_id}`}>
          <motion.div className="real-content" variants={fadeInUp}>
            <CardText _id={_id} data={{ car, model }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

export default ListMission;
