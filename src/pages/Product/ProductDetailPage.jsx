import React from "react";
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareIcon from "@material-ui/icons/Share";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { productsActions } from "../../_redux/action/product.action";
import { ButtonWishlistContainer } from "../../container/Profile/ButtonWishlistContainer";

const styled = makeStyles((theme) => ({
  media: {
    height: 150,
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
    width: "40vw",
  },
  wrapper: {
    backgroundColor: "#F0E5CF",
    textAlign: "center",
    minHeight: "80vh",
  },
}));

const filterProduct = (products, id) => {
  return products.filter((product) => {
    const productId = product.id.toLowerCase();
    return productId.includes(id);
  });
};

export function ProductDetailPage() {
  const classes = styled();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { product, productBought } = useSelector((state) => state.product);

  const filteredProduct = filterProduct(product, id);

  return (
    <>
      {filteredProduct[0] && (
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
          <Card>
            <CardMedia
              className={classes.media}
              image={filteredProduct[0].imageUrl}
            />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              className={classes.titleRow}
            >
              <Typography variant="h4">{filteredProduct[0].title}</Typography>
              <ButtonWishlistContainer id={filteredProduct[0].id} />
            </Grid>
          </Card>
          <Box my={3} px={3}>
            {filteredProduct[0].description}
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            className={classes.checkoutRow}
            overflow="visible"
          >
            <Typography variant="h4" className={classes.checkoutItem}>
              {filteredProduct[0].price}
            </Typography>
            <Button
              className={classes.checkoutItem}
              variant="contained"
              color="primary"
              onClick={() =>
                dispatch(
                  productsActions.checkout(filteredProduct[0], productBought)
                )
              }
            >
              <Typography variant="h4">Buy</Typography>
            </Button>
          </Grid>
        </>
      )}
    </>
  );
}
