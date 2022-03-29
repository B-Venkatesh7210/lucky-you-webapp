import React, { useState, useEffect } from "react";

const Timer = ({ endTime, smallTimer, hasEnded, isProcessing }) => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const endingTime = endTime * 1000;

    interval = setInterval(() => {
      const startingTime = new Date().getTime();
      const distance = endingTime - startingTime;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //timer stops
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return smallTimer ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-evenly",
        fontSize: "26px",
      }}
    >
      <span style={{ margin: "0px 10px" }}>{timerDays}</span>
      <span style={{ fontSize: "15px" }}>Days</span>
      <span style={{ margin: "0px 10px" }}>{timerHours}</span>
      <span style={{ fontSize: "15px" }}>Hrs</span>
      <span style={{ margin: "0px 10px" }}>{timerMinutes}</span>
      <span style={{ fontSize: "15px" }}>Min</span>
      <span style={{ margin: "0px 10px" }}>{timerSeconds}</span>
      <span style={{ fontSize: "15px" }}>Sec</span>
    </div>
  ) : hasEnded ? (
    isProcessing ? (
      <div
        className="button"
        style={{
          height: "8rem",
          width: "30rem",
          marginTop: "2rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="normalText" style={{ fontSize: "45px" }}>
            {" "}
            Declaring Winner{" "}
          </span>
        </div>
      </div>
    ) : (
      <div
        className="button"
        style={{
          height: "8rem",
          width: "30rem",
          marginTop: "2rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="normalText" style={{ fontSize: "45px" }}>
            {" "}
            Giveaway has ended
          </span>
        </div>
      </div>
    )
  ) : (
    <div
      className="button"
      style={{
        height: "8rem",
        width: "30rem",
        marginTop: "2rem",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <span className="blackText" style={{ fontSize: "50px" }}>
            {timerDays}
          </span>
          <span className="normalText" style={{ fontSize: "25px" }}>
            Days
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <span className="blackText" style={{ fontSize: "50px" }}>
            {timerHours}
          </span>
          <span className="normalText" style={{ fontSize: "25px" }}>
            Hours
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <span className="blackText" style={{ fontSize: "50px" }}>
            {timerMinutes}
          </span>
          <span className="normalText" style={{ fontSize: "25px" }}>
            Minutes
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <span className="blackText" style={{ fontSize: "50px" }}>
            {timerSeconds}
          </span>
          <span className="normalText" style={{ fontSize: "25px" }}>
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
