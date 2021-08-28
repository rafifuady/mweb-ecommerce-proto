import React from "react";
import { Box, Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import { PageWrapper } from "../../component/PageWrapper";
import { LoginContainer } from "../../container/Auth";

const style = makeStyles((theme) => ({
  loginBox: {
    padding: theme.spacing(2),
    margin: theme.spacing(40,0),
  },
}));

export function LoginPage() {
  const classes = style();
  return (
    <PageWrapper>
      <Grid container direction="column" alignItems="center">
        <Paper className={classes.loginBox}>
          <Box>
            <Typography>LOGIN</Typography>
          </Box>
          <LoginContainer />
        </Paper>
      </Grid>
    </PageWrapper>
  );
}
