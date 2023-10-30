import React from "react";

import axios from "axios";

import "../style/bodyDetail.css";
import "../style/bodyDetail.mobile.css";

import { useParams, useNavigate } from "react-router-dom";

function BodyDetail() {
const navigate = useNavigate()

  const { id } = useParams();

  const [listcinemas, setListCinemas] = React.useState([]);

  const [DetailMovie, setDetailMovie] = React.useState(null);

  const [dateMovie, setDateMovie] = React.useState(null);
  const [timeMovie, setTimeMovie] = React.useState(null);

  //lifeCycle

  const handleGetAPI = async () => {
    try {
      //req detail cinema

      const requestDetail = await axios.get(
        `https://tickitz-be.onrender.com/yaqin/movie/detail/${id}`
      );

      if (requestDetail.data.data.length > 0) {
        setDetailMovie(requestDetail.data.data[0]);
      }
      console.log(DetailMovie);

      //req detail cinemas

      const requestCinemas = await axios.get(
        `https://tickitz-be.onrender.com/yaqin/movie/${id}/cinemas`
      );
      if (requestCinemas.data.data.length > 0) {
        setListCinemas(requestCinemas.data.data);
        console.log(listcinemas)
      }
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };

  React.useEffect(() => {
    handleGetAPI();
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
      {/* loading end*/}
      {/* detail movie start*/}
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
              <h2 className="detailTitle">{DetailMovie.title}</h2>
              <h4 className="detailTitle capital">
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
                  <h6 className="text-muted detailTitle detailDirected">
                    Directed by
                  </h6>
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
                <div className="d-flex ">
                  <span className="detailSynopsis">{DetailMovie.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      ;{/* detail movie end */}
      {/* cinemas start */}
      <section id="cinemas" className="container">
        <h2 className="text-center" style={{ fontSize: "24px" }}>
          Showtime and Tickets
        </h2>
        {/* day and hour start */}
        <div className="d-flex gap-3 justify-content-center mt-3">
            <div style={{ width: "260px" }}>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDateMovie(e.target.value)}
              />
            </div>
            <select
              class="form-select form-select-sm"
              onChange={(e) => setTimeMovie(e.target.value)}
              style={{ width: "260px" }}
            >
              <option selected>Select time</option>
              <option value="10:00">10:00 WIB</option>
              <option value="13:00">13:00 WIB</option>
              <option value="16:00">16:00 WIB</option>
              <option value="19:00">19:00 WIB</option>
            </select>
          </div>
        {/* day and hour end */}
        <div className="row mt-5">
          {listcinemas.map((item) => (
          <div className="col col-md-4">
            <div className="cinemas-Card">
              {/* headcontent start */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "40px",
                  padding: "30px 30px 0 30px",
                }}
              >
                <img
                  src={item.logo}
                  width="140px"
                  height="50px"
                  style={{ objectFit: "contain" }}
                  alt="cinemas"
                />

                <div>
                  <h4>{item.name}</h4>
                  <p style={{ fontSize: "12px", color: "#6e7191", margin: 0 }}>
                    {item.address}
                  </p>
                </div>
              </div>
              <hr />
              {/* headcontent end */}
              {/* footer content start*/}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "40px",
                  padding: "0px 30px 20px 30px",
                }}
              >
                {item.movieStart.map((time) => (

                <p style={{ color: "#4E4B66", fontSize: "12px" }}>{time} WIB</p>
                ))}
       
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 30px 0px 30px",
                }}
              >
                <p style={{ fontSize: "16px", color: "#6B6B6B" }}>Price</p>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                 Rp {item.price}/Seat
                </p>
              </div>

              <div className="d-grid" style={{ padding: "0px 30px 30px 30px" }}>
              <button
                      className={
                        dateMovie && timeMovie
                          ? "btn btn-primary"
                          : "btn btn-secondary"
                      }
                      onClick={() => {
                        if (dateMovie && timeMovie)
                          navigate(`/choose-seat/${id}`, {
                            state: {
                              dateMovie,
                              timeMovie,
                              cinemaId: item.id,
                              movieTitle: DetailMovie.title,
                              priceDisplay: item.priceDisplay,
                              price: item.price,
                              cinemaName: item.name,
                              cinemaLogo: item.logo,
                            },
                          });
                      }}
                      disabled={!dateMovie || !timeMovie}
                    >
                      Book now
                    </button>
              </div>
              {/* footer content end*/}
            </div>
          </div>

          ))}
        </div>
      </section>
      {/* cinemas end */}
    </>
  );
}

export default BodyDetail;
