import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { CategoryListContainer } from "../../container/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
  productRow: {
    overflowY: "scroll",
    margin: theme.spacing(5, 0),
  },
}));

export function HomePage() {
  const classes = styled();
  //todo:
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(productsActions.getCategory());
    // eslint-disable-next-line
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
            onChange={(e) => {
              setTimeout(() => {
                setSearch(e.target.value);
              }, 3000);
            }}
          />
        </Grid>
      </Grid>

      {search === "" && <CategoryListContainer />}
      <Grid item className={classes.productRow}>
        <ProductHomeContainer searchValue={search} />
      </Grid>
    </>
  );
}
