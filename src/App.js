//import { Routes, Route } from "react-router-dom";

// import About from "./about"
// import Home from "./home"

// Axios

import axios from  "axios";


// hoc

import DefaultHoc from "./hoc/Default.hoc";
import MovieHoc from "./hoc/movie.hoc";

// component

import HomePage from "./pages/home.page.js";
import Movie from "./pages/movies.page"
import Plays from "./pages/plays.page";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// axios Default settings

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>

      <DefaultHoc exact path="/" component={HomePage} />
      <MovieHoc  exact path="/movie/:id" component={Movie} />
      <DefaultHoc exact path="/plays" component={Plays} />
    </>
  );
};

export default App;
