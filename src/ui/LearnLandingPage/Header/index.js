import * as React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { blueGrey, indigo } from "@material-ui/core/colors";
import HomeIcon from "@material-ui/icons/Home";

const useStyle = makeStyles(theme => ({
  root: {
    height: theme.spacing(8),
    background: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: `calc(100% - ${2 * theme.spacing(4)})`,
    padding: theme.spacing(0, 4),
    margin: "0",
    boxShadow: "0px 5px 10px rgba(0,0,0,.025)"
  },
  logo: {
    fontWeight: "600",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: blueGrey[600]
  },
  linksWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button: {
    background: indigo[500],
    fontSize: "12px",
    boxShadow: "0 0 0 transparent",

    "&:hover": {
      background: indigo[700]
    },
    "&:active": {
      boxShadow: "0 0 0 transparent"
    }
  },
  icon: {
    fontSize: "16px",
    marginRight: theme.spacing(1)
  }
}));

export const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.logo}>Frog</Typography>
      <div className={classes.linksWrapper}>
        <Button variant="contained" color="primary" className={classes.button}>
          <HomeIcon className={classes.icon} /> Home
        </Button>
      </div>
    </div>
  );
};
