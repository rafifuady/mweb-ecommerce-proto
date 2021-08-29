import React from "react";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";

const styled = makeStyles((theme) => ({
  media: {
    maxHeight: 150,
    maxWidth: 150,
  },
  cardTitle: {
    background: "#F7F6F2",
  },
  card: {
    border: "2px",
    outline: "10px",
  },
  headerIcon: {
    padding: theme.spacing(2, 2),
    color: "white",
  },
  headerRow: {
    backgroundColor: "#4B6587",
    margin: theme.spacing(0, 0, 2),
  },
  titleRow: {
    // backgroundColor: "#4B6587",
    padding: theme.spacing(2),
    // margin: theme.spacing(0,2),
  },
  checkoutRow: {
    // padding: theme.spacing(2,0),
    margin: theme.spacing(0, 0, 10, 0),
    zIndex: "5",
  },
  checkoutItem: {
    minHeight: "20vh",
    maxWidth: "30vw",
    margin: theme.spacing(0, 2),
  },
  wrapper: {
    minHeight: "20vh",
    margin: theme.spacing(4, 2),
    padding: theme.spacing(4,0)
  },
}));

export function ProductHistoryContainer() {
  const classes = styled();
  const history = useHistory();
  const { productBought } = useSelector((state) => state.product);
  return (
    <>
    {
      productBought &&
      productBought.map((val,index) => (
      <Paper
        elevation={6}
        className={classes.wrapper}
        onClick={() => history.push(`/product/detail/${val.id}`)}
      >
        <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
          <Grid item className={classes.checkoutItem}>
            <img src={val.imageUrl} className={classes.media} />
          </Grid>
          <Grid item className={classes.checkoutItem}>
            <Grid container direction="column" style={{ margin: "5px" }}>
              <Typography style={{ fontWeight: 600 }}>
                {val.title}
              </Typography>
              <Typography>{val.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      ))
    }
    </>
  );
}
