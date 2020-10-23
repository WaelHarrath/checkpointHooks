import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList/MovieList";
import Filter from "./Addmovie/Filter";
import AddMovie from "./Addmovie/AddMovie";
function App() {
  const [movies, setMovies] = useState([
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 5,
    },
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa2",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 1,
    },
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa3",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 3,
    },
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa4",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 4,
    },
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa5",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 5,
    },
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa6",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 2,
    },
    {
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa7",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 1,
    },
  ]);
  const addMovie = (movie) => {
    setMovies((movies) => [...movies, movie]);
  };
  const searchMovie = (searchM) => {
    setMovies(
      movies.filter(
        (el) =>
          el.title.includes(searchM.searchTitle) ||
          el.rate >= parseInt(searchM.searchRate)
      )
    );
  };
  return (
    <div className="App">
      <AddMovie addMovie={addMovie} />
      <Filter searchMovie={searchMovie} />
      <MovieList Movielist={movies} />
    </div>
  );
}

export default App;
