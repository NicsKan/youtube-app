import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ videoDetails, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(videoDetails)}
      >
        <img
          src={videoDetails.snippet.thumbnails.medium.url}
          alt={videoDetails.snippet.channelTitle}
          style={{ marginRight: "20px" }}
        />
        <Typography>
          <b>{videoDetails.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
