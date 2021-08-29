import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  // makeStyles,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../_utils/googleButton.css";

import { authActions } from "../../_redux/action";
import { useHistory } from "react-router";

// const style = makeStyles((theme) => ({
//   loginBox: {
//     padding: theme.spacing(2),
//     margin: theme.spacing(40, 0),
//   },
//   googleButton: {
//     background: "white",
//     color: "#444",
//     borderRadius: "5px",
//     border: "thin solid #888",
//     boxShadow: "1px 1px 1px grey",
//     whiteSpace: "nowrap",
//   },
// }));

export function LoginContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required().min(3),
      password: Yup.string().required().min(3),
    }),
    onSubmit: (ctx) => {
      dispatch(authActions.login(ctx));
      history.push("/");
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box mb={2} px={5}>
          <TextField
            label="Username"
            variant="outlined"
            helperText={formik.errors.username}
            error={formik.errors.username ? true : false}
            {...formik.getFieldProps("username")}
            fullWidth
          />
        </Box>
        <Box mb={2} px={5}>
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            helperText={formik.errors.password}
            error={formik.errors.password ? true : false}
            {...formik.getFieldProps("password")}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2} px={5}>
          <Grid container direction="row" justifyContent="space-between">
            <FormControlLabel
              label="Remember Me"
              control={<Checkbox color="primary" />}
              {...formik.getFieldProps("remember")}
            />
            <Button
              type="submit"
              children="LOGIN"
              variant="contained"
              color="primary"
            />
          </Grid>
        </Box>
        <Box mb={2} px={5}>
          <Button
            children="Facebook"
            variant="contained"
            // color="primary"
            fullWidth
          />
        </Box>
        <Box mb={2} px={5}>
          <Button
            id="googleBtn"
            children="Google"
            variant="contained"
            color="primary"
            fullWidth
          >
            GOOGLE
          </Button>
        </Box>
      </form>
    </>
  );
}
