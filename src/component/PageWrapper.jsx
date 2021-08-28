import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#F0E5CF",
    textAlign: "center",
    minHeight: "100vh"
  },
}));

export function PageWrapper(props) {
  const classes = style();
  return <Box className={classes.wrapper}>{props.children}</Box>;
}
