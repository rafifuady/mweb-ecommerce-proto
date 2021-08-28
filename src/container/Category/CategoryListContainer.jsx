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
    display: "block"
  },
  categoryText: {
    margin: theme.spacing(2,0,0,0),
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

export function CategoryListContainer({ categories }) {
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
  return (
    <>
      <div className={classes.categoryRow} {...bind()}>
        {categories &&
          categories.map((val, index) => (
            <animated.div style={{ ...style }}>
              <ButtonBase className={classes.categoryIcon} key={index}>
                <Avatar
                  variant="square"
                  src={val.imageUrl}
                  children={val.name}
                />
                <Box className={classes.categoryText}>{val.name}</Box>
              </ButtonBase>
            </animated.div>
          ))}
      </div>
    </>
  );
}
