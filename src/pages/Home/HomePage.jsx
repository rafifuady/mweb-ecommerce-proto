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
const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export function HomePage() {
  const classes = styled();
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });
  //todo:
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

      <div className={classes.categoryRow} {...bind()}>
        <animated.div style={{ ...style }}>
          <ButtonBase className={classes.categoryIcon}>
            <Avatar variant="square" children="F" />
          </ButtonBase>
        </animated.div>
        <animated.div style={{ ...style }}>
          <ButtonBase className={classes.categoryIcon}>
            <Avatar variant="square" children="F" />
          </ButtonBase>
        </animated.div>
        <animated.div style={{ ...style }}>
          <ButtonBase className={classes.categoryIcon}>
            <Avatar variant="square" children="F" />
          </ButtonBase>
        </animated.div>
        <animated.div style={{ ...style }}>
          <ButtonBase className={classes.categoryIcon}>
            <Avatar variant="square" children="F" />
          </ButtonBase>
        </animated.div>
      </div>

      <Box>
        Product List
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/350x150"
            />
            <CardContent>
              <Typography>Product 1</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/350x150"
            />
            <CardContent>
              <Typography>Product 1</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/350x150"
            />
            <CardContent>
              <Typography>Product 1</Typography>
            </CardContent>
          </CardActionArea>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/350x150"
              />
              <CardContent>
                <Typography>Product 1</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Card>
      </Box>
    </>
  );
}
