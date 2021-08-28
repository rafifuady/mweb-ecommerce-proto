import React from "react";
import {
  BottomNavigation,
  makeStyles,
  BottomNavigationAction,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { NavLink } from "react-router-dom";

const style = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});
export function NavigationContainer() {
  const classes = style();
  const [value, setValue] = React.useState(0);
  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" 
        // component={()=> <NavLink />} 
        />
        <BottomNavigationAction label="Feed" />
        <BottomNavigationAction label="Cart" />
        <BottomNavigationAction label="Profile" />
      </BottomNavigation>
    </>
  );
}
