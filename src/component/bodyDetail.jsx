import React from "react";

import axios from "axios";

import "../style/bodyDetail.css";
import "../style/bodyDetail.mobile.css";

import { useParams } from "react-router-dom";

function BodyDetail() {
  const { id } = useParams();

  const [DetailMovie, setDetailMovie] = React.useState(null);

  //lifeCycle

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/movie.json")
      .then((response) => {
        console.log(`success :`);
        if (response.status === 200) {
          // find data === id
          setDetailMovie(
            response.data.find(
              (item) => item.title.toLowerCase().split(" ").join("-") === id
            )
          );
          console.log(DetailMovie);
        }
      })
      .catch((error) => console.log(`error : ${error}`));
  }, []);

  return (
    <>
      {/* loading start*/}
      {DetailMovie === null ? (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border mt-10" role="status"></div>
          </div>
          <p className="text-center mt-2">Loading...</p>
        </>
      ) : null}
      ;{/* loading end*/}
      {DetailMovie !== null ? (
        <section id="detailBody" className="mt-5">
          <div className="row">
            <div className="col-md-4 col-xs-12 d-flex justify-content-center detailPoster">
              <div className="imgPoster">
                <img
                  src={DetailMovie.poster}
                  alt="poster"
                  className="imgFilm"
                ></img>
              </div>
            </div>
            <div className="col-md-8 col-xs-12 poster2">
              <h1 className="detailTitle">{DetailMovie.title}</h1>
              <h4 className="detailTitle">
                {DetailMovie.genres.map((item, key) => (
                  <span>
                    {DetailMovie.genres.length - 1 === key ? item : `${item}, `}
                  </span>
                ))}
              </h4>

              <div className="row mt-4">
                <div className="col-md-4 col-xs-12">
                  <h6 className="text-muted detailTitle">Release date</h6>
                  <h6 className="detailTitle">{DetailMovie.release}</h6>
                  <h6 className="mt-4 text-muted detailTitle">Duration</h6>
                  <h6 className="detailTitle">{DetailMovie.duration}</h6>
                </div>
                <div className="col-md-8 col-xs-12">
                  <h6 className="text-muted detailTitle detailDirected">Directed by</h6>
                  <h6 className="detailTitle">{DetailMovie.director}</h6>
                  <h6 className="mt-4 text-muted detailTitle">Cast</h6>
                  <h6 className="detailTitle">
                    {DetailMovie.cast.map((item, key) => (
                      <span>
                        {DetailMovie.cast.length - 1 === key
                          ? item
                          : `${item}, `}
                      </span>
                    ))}
                  </h6>
                </div>

                <hr className="mt-4 mb-4 ml-5 mr-5" />

                <h4 className="detailTitle">Synopsis</h4>
                <div className="d-flex justify-content-center ">
                  <span className="detailSynopsis">{DetailMovie.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      ;
    </>
  );
}

export default BodyDetail;
