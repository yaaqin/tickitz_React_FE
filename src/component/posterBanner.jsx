import React from 'react'

function posterBanner() {
  return (
    <div>
        <div className="image-poster mt-3 firstBannerNowShowing">
            <img src="/tickitz_image/poster/Rectangle 1190.png" alt="poster" />
            <h5 className="text-center mt-3">Black Widow</h5>
            <span className="text-muted text-center" style={{fontSize: "14px"}}>
              Action, Adventure, Sci-Fi</span
            >
            <div className="d-grid mt-3">
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
    </div>
  )
}

export default posterBanner;