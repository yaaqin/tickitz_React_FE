import React from "react";
import Navigasi from "../component/navBar";
import Footer from "../component/footer";

import "../style/App.css";


import { useState, useEffect } from "react";

import MovieComp from "../component/posterBanner";

import axios from "axios";
import { Navigate } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState([]);

  const handleGetResponse = async () => {
    try {
      const movieList = await axios.get(
        "https://yaaqin-api.vercel.app/movie.json"
      );

      if (movieList.status === 200) {
        setMovie(movieList.data);
        console.log(movieList.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetResponse();
  }, []);

  return (
    <>
      <Navigasi />
      <div className="py-4 px-5 d-flex mt-10 justify-content-center bg-ungu mb-2">
        <p className="text-white fs-3">Find your favorite Movie!!</p>

      </div>
      <div className="px-5">
        <div className="allMovie d-flex flex-wrap px-5">
          {movie.map((item) => (
            <MovieComp
              poster={item.poster}
              title={item.title}
              genres={item.genres}
              desc={item.desc}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Movie;
