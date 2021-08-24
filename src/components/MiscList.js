import React from "react";
import { Divider, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  command: {
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
}));

function MiscList() {
  const classes = useStyles();

  return (
    <>
      <ListItem className={classes.command}>
        <ListItemText
          primary="help"
          secondary="Shows all the commands available."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="stats" secondary="Shows statistics of the bot." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="nodeinfo"
          secondary="Gives you information about all the nodes."
        />
      </ListItem>
      <ListItem className={classes.command}>
        <ListItemText
          primary="latency"
          secondary="Gives you information about bot current latency."
        />
      </ListItem>
    </>
  );
}

export default MiscList;
