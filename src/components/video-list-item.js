import React from "react";
import { Paper } from "react-md";
const VideoListItem = ({ video, onSelectedVideo }) => {
  const title = video.snippet.title;
  const urlImage = video.snippet.thumbnails.default.url;
  return (
    <Paper
      key={title}
      zDepth={2}
      className="list-video-item"
      onClick={() => onSelectedVideo(video)}
    >
      <img alt={title} src={urlImage} />
      <div className="list-video-item-details">
        <h3>{title} </h3>
      </div>
    </Paper>
  );
};

export default VideoListItem;
