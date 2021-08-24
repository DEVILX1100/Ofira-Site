import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon, Paper, Typography } from "@material-ui/core";

import QueueIcon from "@material-ui/icons/Queue";
import QueueMusicOutlinedIcon from "@material-ui/icons/QueueMusicOutlined";
import SpeakerIcon from "@material-ui/icons/Speaker";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import CreditCardIcon from "@material-ui/icons/CreditCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    margin: "50px 0 120px 0",
    padding: "40px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    background: theme.palette.background.default,
    border: "5px dashed" + theme.palette.secondary.main,
    borderRadius: "0",
    boxShadow: "none",
    "&:hover": {
      background: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
  },
}));

function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={9}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <QueueMusicOutlinedIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Streaming
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              The Bot has a great streaming quality, no lag, no
              noises, and with a short response time.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <DesktopWindowsIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Multi platform
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              You can put your songs, playlists and lives from the platform
              what else to like!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <VolumeUpIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Volume Controller
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              You can control the music volume, to leave only one sound
              environment, or listen at full volume!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <SpeakerIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Filters
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              In addition to listening to music, you can add filters to let the
              more fun music or boost the bass!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <QueueIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Queue
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              You can control the music list, for example: move,
              remove and shuffle, and no limit on songs!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Icon>
              <CreditCardIcon />
            </Icon>
            <Typography variant="h5" className={classes.title}>
              Free
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              All these features and others are completely free, which
              Is waiting? Add the Bot right now!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
