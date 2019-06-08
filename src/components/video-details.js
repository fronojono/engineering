import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        {" "}
        <h1> is Loading .... </h1>
      </div>
    );
  }
  let title;
  let description;
  let videoId;
  let url;

  console.log(video);
  title = video.snippet.title;
  description = video.snippet.description;
  videoId = video.id.videoId;
  url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="Details-Video md-cell--8">
      <h2>API Youtube</h2>
      <iframe
        width="853"
        height="480"
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
};
export default VideoDetail;
