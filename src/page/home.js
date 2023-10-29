import "../style/App.css";
import "../style/App.mobile.css";

import React from "react";
import axios from "axios";

import MovieComp from "../component/posterBanner";
import Footer from "../component/footer";
import Navigasi from "../component/navBar";

function Home() {
  //mounted / mounting

  const [resultNowShowing, setResultNowShowing] = React.useState([]);
  const [resultUpcoming, setResultUpcoming] = React.useState([]);

  const date = new Date();
  const Month = date
    .toLocaleDateString("default", { month: "short" })
    .toLowerCase();

  const [result, setResult] = React.useState([]);

  const [slcMonth, setslcMonth] = React.useState(Month);

  console.log(slcMonth);

  //lifeCycle
  const handleGetResponse = async () => {
    try {
      const nowShowing = await axios.get(
        "https://tickitz-be.onrender.com/yaqin/movie/now-showing"
      );

      if (nowShowing.status === 200) {
        setResultNowShowing(nowShowing.data.data);
      }

      const upComing = await axios.get(
        "https://tickitz-be.onrender.com/yaqin/movie/upcoming"
      );

      if (upComing.status === 200) {
        setResultUpcoming(upComing.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // .then((response) => {
  //   console.log(`success :`);
  //   if (response.status === 200) {
  //     setResultNowShowing(response.data.data);
  //   }
  // })
  // .catch((error) => console.log(`error : ${error}`));

  React.useEffect(() => {
    handleGetResponse();
  }, []);

  return (
    <div>
      <Navigasi />

      {/* <!--now showing start--> */}
      <section id="now-showing">
        <div className="container py-5">
          {/* <!--header--> */}
          <div className="d-flex justify-content-between">
            <h2 className="text-primary">Now Showing</h2>
            <a className="text-primary" href="/#">
              View All
            </a>
          </div>

          {/* <!--content--> */}
          <div
            className="d-flex mt-md-5 mt-xs-4 contentNowShowing"
            id="nowShowingContent"
          >
            {resultNowShowing.slice(0, 5).map((item) => (
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
      </section>
      {/* <!--now showing end--> */}
      {/* <!--upComing start--> */}
      <section id="upcoming" className="mt-5">
        <div className="container py-5">
          {/* <!--header title--> */}
          <div className="d-flex justify-content-between align-item-center">
            <h2>Upcoming Movies</h2>
            <a className="text-primary mt-md-3 mt-xs-2" href="/#">
              View All
            </a>
          </div>

          {/* <!--MonthList--> */}
          <div className="d-flex justify-content-arround mt-4 gap-2 listMonthMobile">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Des",
            ].map((item) => (
              <button
                className={
                  slcMonth === item.toLowerCase()
                    ? "btn btnPrimary px-4"
                    : "btn btn-outline-primary px-4"
                }
                onClick={() => {
                  setslcMonth(item.toLowerCase());
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* <!--content--> */}
          <div
            className="d-flex mt-5 listBannerUpcoming"
            id="nowShowingContent"
          >
            {resultUpcoming
              .filter((item) => item.showingMonth === slcMonth)
              .slice(0, 5)
              .map((item) => (
                <MovieComp
                  poster={item.poster}
                  title={item.title}
                  genres={item.genres}
                  desc={item.desc}
                  slug={item.slug}
                />
              ))}

            {/* Movie not Found*/}
            {resultUpcoming.filter((item) => item.showingMonth === slcMonth)
              .length === 0 ? (
              <span className="text-center mt-5">
                Movie not found <br />
                Please Select any Month
              </span>
            ) : null}
          </div>
        </div>
      </section>
      {/* <!--upComing end--> */}
      {/* <!--CTA start--> */}
      <section id="CTA" className="mt-5 pt-5 pb-5 cta">
        <div className="container">
          <div className="d-flex justify-content-center">
            <span className="text-muted text-center">
              Be the vanguard of the
            </span>
          </div>
          <h1 className="text-primary text-center">Moviegoers</h1>

          <div className="d-flex gap-2 justify-content-center mt-4">
            <input
              className="emailInput"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Type Your Email"
              style={{ width: "300px" }}
            />
            <button className="btn btn-primary joinBtn">Join Now</button>
          </div>

          <p className="text-center mt-4">
            By joining you as a Tickitz member,
            <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      {/* <!--CTA end--> */}
      {/* <!--Footer Start--> */}
      <Footer />
      {/* <!--Footer End--> */}
    </div>
  );
}

export default Home;
