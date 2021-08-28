import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";

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
}));

export function ProductHomeContainer() {
  const classes = styled();
  const {product, isLoading} = useSelector(state => state.product)
  const history = useHistory()
  return (
    <>
      {isLoading && "Loading"}
      {
        product &&
        product.map((val,index)=> (
          <Card key = {index}>
            <CardActionArea component={RouterLink} to ={`/product/detail/${val.id}`}>
              <CardMedia 
                className={classes.media}
                image={val.imageUrl}
              />
            <CardContent>
              <Typography>{val.title}</Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
    </>
  );
}
