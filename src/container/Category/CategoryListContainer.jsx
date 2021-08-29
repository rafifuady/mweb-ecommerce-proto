import React from "react";
import { Avatar, Box, ButtonBase, makeStyles } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useSelector } from "react-redux";

const styled = makeStyles((theme) => ({
  categoryIcon: {
    padding: theme.spacing(2, 4),
    flexShrink: 0,
    display: "block",
  },
  categoryText: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  categoryRow: {
    display: "flex",
    overflowX: "scroll",
    width: "100%",
    margin: theme.spacing(2, 0),
  },
}));

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export function CategoryListContainer() {
  const classes = styled();

  const { category, isLoading } = useSelector((state) => state.product);

  /////////////////
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
  /////////////////////
  return (
    <>
      <div className={classes.categoryRow} {...bind()}>
        {isLoading && "Loading"}
        {category &&
          category.map((val, index) => (
            <animated.div style={{ ...style }} key={index}>
              <ButtonBase
                className={classes.categoryIcon}
                onClick={() => console.log("go to category")}
              >
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
