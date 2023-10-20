import React from 'react'

function posterBanner(props) {

const {poster, title, genre, desc} = props;

  return (
    <div>
        <div className="image-poster mt-3 firstBannerNowShowing">
            <img src={poster} alt="poster" />
            <h5 className="text-center mt-3">{title}</h5>
            <span className="text-muted text-center" style={{fontSize: "14px"}}>
              {/* {genre.map((item) => `${item},`)} */}
            </span>
            <div className="d-grid mt-3">
              <button className="btn btn-outline-primary detailBtn">Details</button>
            </div>
          </div>
    </div>
  )
}

export default posterBanner;