import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

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
}));

const filterProduct = (products, query) => {
  if (!query) {
    return products;
  }

  return products.filter((product) => {
    const productName = product.title.toLowerCase();
    return productName.includes(query);
  });
};

export function ProductHomeContainer({ searchValue }) {
  const classes = styled();

  const { product, isLoading } = useSelector((state) => state.product);

  const filteredProduct = filterProduct(product, searchValue);

  return (
    <>
      {isLoading && "Loading"}
      {filteredProduct &&
        filteredProduct.map((val, index) => (
          <Card key={index} variant="outlined" className={classes.card}>
            <CardActionArea
              component={RouterLink}
              to={`/product/detail/${val.id}`}
            >
              <CardMedia className={classes.media} image={val.imageUrl} />
            </CardActionArea>
            <CardContent className={classes.cardTitle}>
              <Grid container direction="row">
                <Button>
                  {val.loved === 1 && <FavoriteOutlinedIcon />}
                  {val.loved === 0 && <FavoriteBorderIcon />}
                </Button>
                <Box mt={1}>
                  <Typography>{val.title}</Typography>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        ))}
    </>
  );
}
