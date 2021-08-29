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
import { ProductHistoryContainer } from "../../container/Product";

const styled = makeStyles((theme) => ({
  media: {
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
    margin: theme.spacing(0, 2),
  },
  wrapper: {
    margin: theme.spacing(0,2)
  },
}));

export function PurchasedHistoryPage() {
  const classes = styled();
  const history = useHistory();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        className={classes.headerRow}
      >
        <ButtonBase
          className={classes.headerIcon}
          children={<ArrowBackIcon />}
          onClick={() => history.goBack()}
        />
        <ButtonBase
          className={classes.headerIcon}
          children={<ShareIcon onClick={() => alert("Shared !")} />}
        />
      </Grid>
      <Typography variant="h5">Purchased History</Typography>
    <ProductHistoryContainer />
    </>
  );
}
