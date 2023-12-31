import React from 'react'

import SosmedIcon from './sosmedIcon';

function Footer() {
  return (
    <div>
      <footer className="container pb-3 pt-5 mt-md-10 mt-xs-5" id="footer">
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <div className="logoFoot">
              <img
                className="mb-4"
                src="../tickitz_image/logo/Tickitz 1.png"
                alt="logo"
              />
            </div>
            <div className="logoFoot">
              <p style={{ color: "#6d727a" }}>
                Stop waiting in line. Buy tickets
                <br />
                conveniently, watch movies quietly.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 footerExplore">
            <h6 className="mb-4 pt-4">Explore</h6>
            <a style={{ display: "block", fontWeight: "300" }} href="/#">
              Home
            </a>
            <a style={{ display: "block", fontWeight: "300" }} href="/#">
              List Movie
            </a>
          </div>
          <div className="col-md-3 col-xs-12">
            <h6 className="mb-4 pt-4 sponsorFooter">Our Sponsor</h6>

            <div className="cinemasLogo footerSponsor">
              <div className="cinemasFooter">
                <img
                  className="mb-3"
                  src="../tickitz_image/cinemas/hiflix 2.png"
                  alt="hiflix cinemas"
                />
              </div>
              <div className="cinemasFooter">
                <img
                  className="mb-3"
                  src="../tickitz_image/cinemas/ebv.id 2.png"
                  alt="cinemas"
                />
              </div>
              <div className="cinemasFooter">
                <img
                  className="mb-3"
                  src="../tickitz_image/cinemas/CineOne21 2.png"
                  alt="cinemas"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <h6 className="mb-4 pt-4 footerFollow">Follow Us</h6>

            <SosmedIcon icon="../tickitz_image/icon_sosmed/Vector.svg" name="tickitz.id"/>
            <SosmedIcon icon="../tickitz_image/icon_sosmed/bx_bxl-instagram.svg" name="tickitz.id"/>
            <SosmedIcon icon="../tickitz_image/icon_sosmed/eva_facebook-outline.svg" name="Tickitz Cinema id"/>
            <SosmedIcon icon="../tickitz_image/icon_sosmed/feather_youtube.svg" name="Tickitz Cinema id"/>
            
          </div>
        </div>

        <p className="text-center mt-5 mb-3">
          © 2023 Tickitz. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default  Footer;