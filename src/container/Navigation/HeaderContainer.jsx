import React from "react";
import {
  ButtonBase,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareIcon from "@material-ui/icons/Share";

const styled = makeStyles((theme) => ({
  headerIcon: {
    padding: theme.spacing(2, 2),
    color: "white",
  },
  headerRow: {
    backgroundColor: "#4B6587",
    margin: theme.spacing(0, 0, 2),
  },
}));

export function HeaderContainer() {
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
    </>
  );
}
