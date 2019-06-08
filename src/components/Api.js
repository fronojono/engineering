import React, { Component } from "react";

import SearchBar from "./search-bar";
import VideoList from "./video-list";
import VideoDetail from "./video-details";
import _ from "lodash";
import YTSearch from "youtube-api-search";

import "../styles.css";
const API_SEARCH = "AIzaSyCiYkQCCraPd0cDEd37m-04NoLBGj7EyUk";

class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          selectedVideo: null,
          data: [
           
          ],
            username:"",
            password:''
        
        };
        this.searchVideo("OCR");
      }
      searchVideo = term => {
        YTSearch({ key: API_SEARCH, term: term }, videos => {
          this.setState({
            videos: videos,
            selectedVideo: videos[1]
          });
        });
      };
    render() {
        const searchVideo = _.debounce(term => this.searchVideo(term), 300);
    const { data, videos, selectedVideo } = this.state;
        return (
            <div>
             <div className="wrapVideo md-grid">
                <SearchBar data={data} onSearchTermChange={searchVideo} />
                <VideoDetail video={selectedVideo} />
                <VideoList
                videos={videos}
                onSelectedVideo={selectedVideo => this.setState({ selectedVideo })}
                />
          </div> 
            </div>
        );
    }
}

export default Api;