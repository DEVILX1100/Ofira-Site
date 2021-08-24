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
          primary="Join"
          secondary="Use to join voice channel."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Loop"
          secondary="Use to activate the queue/song loop."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Lyrics"
          secondary="Search for the lyrics of a song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Move"
          secondary="Use to move a song to another song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Now-Playing"
          secondary="Use to view the music you are playing."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Pause"
          secondary="Use to pause/resume song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText primary="Play" secondary="Use to play a song." />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Queue"
          secondary="Use to view the server queue."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Remove"
          secondary="Use to remove a song from the queue."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Search"
          secondary="Use to search for a song/artist."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Shuffle"
          secondary="Use to shuffle the tail."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Skip"
          secondary="Use to skip current song."
        />
      </ListItem>
      <Divider />
      <ListItem className={classes.command}>
        <ListItemText
          primary="Stop"
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
          primary="Clear-Queue"
          secondary="Use to clear the queue."
        />
      </ListItem>
    </>
  );
}

export default MusicList;
