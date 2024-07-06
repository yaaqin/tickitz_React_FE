import React from "react";

import Navbar from '../component/nav';

import Footer from "../component/footer";
import axios from "axios";
import moment from "moment/moment";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function RowSeat({ position, selectedSeat, setSelectedSeat, bookedSeat }) {
  const getSeatColor = (key) => {
    if (bookedSeat?.find((_item) => _item === `${position}${key}`)) {
      return "#6E7191"; // booked
    } else if (selectedSeat?.find((_item) => _item === `${position}${key}`)) {
      return "#5F2EEA"; // ungu
    } else {
      return "#D6D8E7"; // gray
    }
  };

  const checkIfDisabled = (key) => {
    if (bookedSeat?.find((_item) => _item === `${position}${key}`)) {
      return true; // booked
    } else if (selectedSeat?.find((_item) => _item === `${position}${key}`)) {
      return true; // ungu
    } else {
      return false; // gray
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <p>{position}</p>
      {/* left */}
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {[...new Array(7)].map((item, key) => {
          const nextKey = ++key;

          return (
            <div
              style={{
                background: getSeatColor(nextKey),
                borderRadius: "5px",
                width: "25px",
                height: "25px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (!checkIfDisabled(nextKey)) {
                  setSelectedSeat([
                    ...selectedSeat,
                    ...[`${position}${nextKey}`],
                  ]);
                }
              }}
            ></div>
          );
        })}
      </div>
      {/* right */}
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {[...new Array(7)].map((item, key) => {
          const keyPage2 = ++key + 7;

          return (
            <div
              style={{
                background: getSeatColor(keyPage2),
                borderRadius: "5px",
                width: "25px",
                height: "25px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (!checkIfDisabled(keyPage2)) {
                  setSelectedSeat([
                    ...selectedSeat,
                    ...[`${position}${keyPage2}`],
                  ]);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function RowSeatNumber() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <p></p>
      {/* left */}
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {[...new Array(7)].map((item, key) => (
          <div
            style={{
              width: "25px",
              height: "25px",
            }}
          >
            <p>{1 + key}</p>
          </div>
        ))}
      </div>
      {/* right */}
      <div
        style={{
          display: "flex",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        {[...new Array(7)].map((item, key) => {
          const nextKey = key + 8;

          return (
            <div
              style={{
                width: "25px",
                height: "25px",
              }}
            >
              <p>{nextKey}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChooseSeat() {
  const {
    state: {
      dateMovie,
      timeMovie,
      movieTitle,
      priceDisplay,
      price,
      cinemaName,
      cinemaLogo,
      cinemaId,
    },
  } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = React.useState([]);
  const [bookedSeat, setBookedSeat] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAvailableSeat = async () => {
    try {
      const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
      const requestSeat = await axios.post(
        `https://tikitz-v2.adaptable.app/yaqin/movie/${id}/seat`,
        {
          startMovie: `${formatDate} at ${timeMovie}`,
          cinemaId: cinemaId,
        }
      );

      const getBookedList = requestSeat?.data?.data?.booked ?? [];
      setSelectedDate(
        `${moment(dateMovie).format("ddd, DD MMM YYYY")} at ${timeMovie}`
      );
      setBookedSeat(getBookedList);
    } catch (error) {}
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      // HIT API BOOKING SEAT
      const formatDate = moment(dateMovie).format("dddd, DD MMMM YYYY");
      const completeDate = `${formatDate} at ${timeMovie}`;
      const requestBooking = await axios.post(
        `https://tikitz-v2.adaptable.app/yaqin/ticket/seat`,
        {
          movieSlug: id,
          cinemaId: cinemaId, 
          seat: selectedSeat,
          startMovie: completeDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (requestBooking.data.data.paymentId) {
        const requestPayment = await axios.patch(
          `https://tikitz-v2.adaptable.app/yaqin/ticket/purchase/${requestBooking.data.data.paymentId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (requestPayment.data.data.redirect_url) {
          window.location.href = requestPayment.data.data.redirect_url;
        }
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // handle hanya yang sudah login aja
    if(!localStorage.getItem("token") && !localStorage.getItem("profile")) {
      if(window.confirm("Silahkan login terlebih dahulu")) {
        navigate("/")
      }
    }

    handleAvailableSeat();
  }, []);

  return (
    <div id="choose_seat_page">
      {/* Navbar */}
      <div className="container py-4">
        <Navbar />
      </div>
      {/* Content */}
      <div className="pt-5" style={{ background: "#F5F6F8" }}>
        <div className="container">
          <div className="row">
            <div className="col col-md-8">
              <section id="content">
                {/* Movie Selected */}
                <h2
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "bolder" }}
                >
                  Movie Selected
                </h2>
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <h3 style={{ fontSize: "24px" }}>{movieTitle}</h3>
                </div>

                {/* Choose Your Seat */}
                <h2
                  className="mb-3"
                  style={{ fontSize: "24px", fontWeight: "bolder" }}
                >
                  Choose Your Seat
                </h2>
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "100px 200px 100px 200px",
                    marginBottom: "30px",
                  }}
                >
                  {/* screen */}
                  <p className="text-center" style={{ marginLeft: "10%" }}>
                    Screen
                  </p>
                  <div
                    style={{
                      backgroundColor: "#D6D8E7",
                      width: "90%",
                      height: "25px",
                      borderRadius: "10px",
                      marginLeft: "10%",
                    }}
                  />

                  {/* row seat a */}
                  <RowSeat
                    position="A"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat b */}
                  <RowSeat
                    position="B"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat c */}
                  <RowSeat
                    position="C"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat d */}
                  <RowSeat
                    position="D"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat e */}
                  <RowSeat
                    position="E"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat f */}
                  <RowSeat
                    position="F"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat g */}
                  <RowSeat
                    position="G"
                    selectedSeat={selectedSeat}
                    setSelectedSeat={(e) => setSelectedSeat(e)}
                    bookedSeat={bookedSeat}
                  />

                  {/* row seat number */}
                  <RowSeatNumber />
                </div>
              </section>
            </div>
            <div className="col col-md-4">
              <h2
                className="mb-3"
                style={{ fontSize: "24px", fontWeight: "bolder" }}
              >
                Order Info
              </h2>

              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              >
                <div style={{ padding: "20px 20px 0px 20px" }}>
                  <div className="d-flex justify-content-center w-100 mb-2">
                    <img src={cinemaLogo} width="100px" alt="logo" />
                  </div>
                  <h5 className="text-center mb-5">{cinemaName}</h5>

                  <div className="d-flex justify-content-between">
                    <p>Movie selected</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      {movieTitle}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>Time & Date</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      {selectedDate}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>One ticket price</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      Rp {priceDisplay}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>Seat choosed</p>
                    <p
                      className="single-text"
                      style={{ fontWeight: "bold", maxWidth: "250px" }}
                    >
                      {selectedSeat.map((item) => `${item.replace("_", "")}, `)}
                    </p>
                  </div>
                </div>

                <hr />

                <div
                  className="d-flex justify-content-between"
                  style={{ padding: "0px 20px 0px 20px" }}
                >
                  <p style={{ fontWeight: "bold" }}>Total Payment</p>
                  <p
                    className="single-text text-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    Rp {price * selectedSeat.length}
                  </p>
                </div>
              </div>

              {/* Button checkout */}
              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Change your movie
                </button>
                <button
                  className={
                    isLoading || selectedSeat.length === 0
                      ? "btn btn-secondary px-4"
                      : "btn btn-primary px-4"
                  }
                  onClick={handleCheckout}
                  disabled={isLoading || selectedSeat.length === 0}
                >
                  {isLoading ? "Loading..." : "Checkout now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChooseSeat;