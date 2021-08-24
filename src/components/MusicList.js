import React from "react";
import { ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  command: {
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
}));

function MusicList() {
  const classes = useStyles();

  return (
    <>
      <ListItem className={classes.command}>
        <ListItemText
          primary="join"
          secondary="Use to join voice channel."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="loop"
          secondary="Use to activate the queue/song loop."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="lyrics"
          secondary="Search for the lyrics of a song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="move"
          secondary="Use to move a song to another song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="nowplaying"
          secondary="Use to view the music you are playing."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="pause"
          secondary="Use to pause/resume song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="play" secondary="Use to play a song." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="queue"
          secondary="Use to view the server queue."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="remove"
          secondary="Use to remove a song from the queue."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="search"
          secondary="Use to search for a song/artist."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="shuffle"
          secondary="Use to shuffle the tail."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="skip"
          secondary="Use to skip current song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="stop"
          secondary="Use to stop playing song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="Volume" secondary="Use to change volume." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="clear"
          secondary="Use to clear the queue."
        />
      </ListItem>
    </>
  );
}

export default MusicList;
