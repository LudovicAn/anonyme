import React, { useRef, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { scrollTo } from "src/helper";

import LayoutAnimate from "src/component/LayoutAnimate";

const SingleItem = (props) => {
  const { item, uid, open, setOpen, handleClick } = props;
  const style = useStyles();

  const ref = useRef();

  const handleExpand = () => {
    if (open === uid) {
      setOpen(null);
    } else {
      setOpen(uid);
    }
    window.scroll(0, ref.current.offsetTop);
    console.log("offset", ref.current.offsetTop);
  };

  useEffect(() => {
    console.log("offset", ref.current.offsetTop);
  }, []);

  return (
    <motion.div layout>
      <Card className={style.card} ref={ref}>
        <CardActionArea onClick={handleExpand}>
          <CardContent>
            <motion.div layout>
              <div className="between_detail">
                <Typography color="textSecondary" gutterBottom>
                  {item.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {item.personal}
                </Typography>
              </div>

              <Typography variant="h6" component="h2">
                {item.company}
              </Typography>

              <Typography color="textSecondary" className="left_detail">
                <span>{item.registered}</span>
              </Typography>

              <Typography variant="h6" component="h2" className="left_detail">
                {item.balance}
              </Typography>
            </motion.div>
          </CardContent>
        </CardActionArea>
        {open === uid && (
          <LayoutAnimate>
            <CardContent>
              <Typography variant="h5" component="h6">
                Mission
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={style.detail}
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={style.detail}
              >
                {item.about}
              </Typography>

              <Typography variant="h5" component="h6">
                Contact
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.phone}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.address}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary">Accepter mission</Button>
            </CardActions>
          </LayoutAnimate>
        )}
      </Card>
    </motion.div>
  );
};

export default SingleItem;

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  detail: {
    marginBottom: theme.spacing(2),
  },
}));
