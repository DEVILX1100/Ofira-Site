import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  command: {
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
}));

function EffectsList() {
  const classes = useStyles();

  return (
    <>
      <ListItem className={classes.command}>
        <ListItemText
          primary="8D"
          secondary="Adds 8D effects to track(s)"
        />
      </ListItem>
      <ListItem className={classes.command}>
        <ListItemText
          primary="bassboost"
          secondary="Adds bassboost effects to track(s)"
        />
      </ListItem>
      <ListItem className={classes.command}>
        <ListItemText
          primary="daycore"
          secondary="Adds daycore effects to track(s)"
        />
      </ListItem>
      <ListItem className={classes.command}>
        <ListItemText
          primary="nightcore"
          secondary="Adds nightcore effects to track(s)"
        />
      </ListItem>
      <ListItem className={classes.command}>
        <ListItemText
          primary="vaporware"
          secondary="Adds vaporware effects to track(s)"
        />
      </ListItem>
    </>
  );
}

export default EffectsList;
