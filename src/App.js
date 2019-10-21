import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  
  state = {}
  componentDidMount() {
    this._getMovies();
  }
  _renderMovies = () => {
     const movies = this.state.movies.map(v => {
      return <Movie
        title={v.title}
        poster={v.medium_cover_image}
        key={v.id}
        genres={v.genres}
        synopsis={v.synopsis}
      />
    })
    return movies
  }
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(res => res.json())
    .then(v=> v.data.movies)
    .catch(err => console.log(err))
  }
  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {
          movies ? this._renderMovies() : "Loading"
        }
      </div>
    )
  }
}
export default App;
