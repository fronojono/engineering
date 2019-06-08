import React from "react";
import VideoListItem from "../components/video-list-item";
const VideoList = ({ videos, onSelectedVideo }) => {
  let itemsVideos = [];
  if (videos) {
    itemsVideos = videos.map(video => {
      return (
        <VideoListItem
          video={video}
          key={video.etag}
          onSelectedVideo={onSelectedVideo}
        />
      );
    });
  }
  return (
    <div className="videoList md-cell--4">
      <h2>&nbsp;</h2>
      {itemsVideos}
    </div>
  );
};

export default VideoList;
