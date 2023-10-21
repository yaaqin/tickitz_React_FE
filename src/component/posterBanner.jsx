import React from "react";

function posterBanner(props) {
  const { poster, title, genres, desc } = props;

  return (
    <div className="container singleText">
      <div className=" image-poster mt-3 firstBannerNowShowing">
        <img src={poster} alt="poster" />
        <h5 className="text-center mt-3 ">{title}</h5>
        <span className="text-muted text-center" style={{ fontSize: "14px" }}>
          {genres?.map((item, key) => (
            <span>{genres.length - 1 === key ? item : `${item},`}</span>
          ))}
        </span>
        <div className="d-grid mt-3">
          <button className="btn btn-outline-primary detailBtn">Details</button>
        </div>
      </div>
    </div>
  );
}

export default posterBanner;
