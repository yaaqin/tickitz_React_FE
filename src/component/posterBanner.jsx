import React from "react";
import { Link } from "react-router-dom";


function posterBanner(props) {
  const { poster, title, genres, desc, slug } = props;

  return (
    <div className="container singleText">
      <div className=" image-poster mt-3 firstBannerNowShowing">
        <div className="d-flex justify-content-center">
          <Link to={`/detail/${title.split(" ").join("-")}`}>
            <img src={poster} alt="poster" className="moviesPoster" />
          </Link>
        </div>
        <h5 className="text-center mt-3 limit-text ">{title}</h5>
        <span className="text-muted text-center capitalize" style={{ fontSize: "14px" }}>
          {genres?.map((item, key) => (
            <span>{genres.length - 1 === key ? item : `${item}, `}</span>
          ))}
        </span>
        <Link to={`/detail/${title.split(" ").join("-")}`}>
          <div className="d-grid mt-3">
            <button className="btn btn-outline-primary detailBtn">Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default posterBanner;
