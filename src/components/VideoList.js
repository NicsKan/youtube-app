import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, onVideoSelect }) => {
  return videos.map((video, id) => {
    return (
      <Grid container spacing={10} key={id}>
        <VideoItem videoDetails={video} onVideoSelect={onVideoSelect} />
      </Grid>
    );
  });
};

export default VideoList;
