import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  InputBase,
  List,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { CategoryListContainer } from "../../container/Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../_redux/action/product.action";
import { ProductHomeContainer } from "../../container/Product";

const styled = makeStyles((theme) => ({
  searchRowItem: {
    padding: theme.spacing(2, 0),
  },
  searchRow: {
    backgroundColor: "#F0E5CF",
  },
  wishlist: {
    padding: theme.spacing(2, 0),
  },
  categoryIcon: {
    padding: theme.spacing(2, 4),
    flexShrink: 0,
  },
  categoryRow: {
    display: "flex",
    overflowX: "scroll",
    width: "100%",
    margin: theme.spacing(2, 0),
  },
  media: {
    height: 150,
  },
  productRow: {
    overflowY: "scroll",
    margin: theme.spacing(5, 0),
  },
}));

export function HomePage() {
  const classes = styled();
  //todo:
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.getCategory());
  }, []);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        className={classes.searchRow}
      >
        <Grid item className={classes.searchRowItem}>
          <Button className={classes.wishlist}>
            <FavoriteBorderIcon />
          </Button>
        </Grid>
        <Grid item className={classes.searchRowItem}>
          <OutlinedInput
            type="text"
            variant="outlined"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Grid>
      </Grid>

      <CategoryListContainer />
      <Grid item className={classes.productRow}>
        <ProductHomeContainer />
      </Grid>
    </>
  );
}
