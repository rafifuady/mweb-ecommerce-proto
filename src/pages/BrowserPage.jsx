import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { PageWrapper } from "../component";

const style = makeStyles(() => ({
  screen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
}));

export function BrowserPage() {
  const classes = style();
  return (
    <PageWrapper>
      <Box className={classes.screen}>
        <Typography>Please use your mobile browser</Typography>
      </Box>
    </PageWrapper>
  );
}
