import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import AuthService from "src/services/AuthService";

// import { data } from "./data";
import CardText from "./CardText";

import useFetch from "src/services/HookFetch";

const Details = (props) => {
  const { id } = props;
  const history = useHistory();
  const init = {
    car: "",
    model: "",
    comments: [],
  };
  const [dataDetails, setDataDetails] = useState(init);
  const [dataSt, load] = useFetch("/car");
  const [dataComment, loadComment] = useFetch("/comment");
  //todo change into server side

  useEffect(() => {
    load({ id: id }, "post");
    loadComment({ id: id }, "post");
  }, []);

  useEffect(() => {
    if (dataSt.data.length > 0) {
      setDataDetails({
        ...dataDetails,
        ...dataSt.data[0],
      });
    }

    return () => {
      setDataDetails(init);
    };
  }, [dataSt.data]);

  useEffect(() => {
    if (dataComment.data.length > 0) {
      setDataDetails({
        ...dataDetails,
        comments: dataComment.data,
      });
    }
  }, [dataComment.data]);

  const handleReturn = () => {
    setTimeout(() => history.goBack(), 200);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className="overlay"
      ></motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <div className="real-content">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <Button
                variant="text"
                className="link"
                onClick={handleReturn}
                startIcon={
                  <ArrowRightAlt style={{ transform: "rotate(180deg)" }} />
                }
              >
                Retour
              </Button>
            </motion.div>
            <CardText _id={id} data={dataDetails} />
            <motion.div
              className="content-container"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {dataDetails.about}

              {AuthService.getAccessToken() ? (
                <div
                  style={{
                    marginTop: 20,
                  }}
                >
                  <h4>Commentaire</h4>
                  {dataDetails.comments.length > 0 &&
                    dataDetails.comments.map((item, key) => (
                      <div
                        key={key}
                        style={{
                          border: "1px solid rgb(0 0 0 / 10%)",
                          padding: "0.5em 1em",
                        }}
                      >
                        {item.comment}
                      </div>
                    ))}
                  <TextField
                    label="Mettre votre commentaire ici"
                    multiline
                    maxRows={4}
                    rows={4}
                    variant="filled"
                    fullWidth
                    style={{ margin: "1em 0" }}
                  />
                  <Button variant="contained" color="primary">
                    Poster
                  </Button>
                </div>
              ) : (
                ""
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Details;
