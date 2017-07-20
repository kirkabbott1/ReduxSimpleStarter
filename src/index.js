import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import reducers from './reducers';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBGwB12Dy5Y1mY-wDZR_--aD2W5tYsziW4';



// const createStoreWithMiddleware = applyMiddleware()(createStore);



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
      };

    this.videoSearch('thehomedepot products');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
    <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos}/>
    </div>
    );
  }
}

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
  , document.querySelector('.container'));
