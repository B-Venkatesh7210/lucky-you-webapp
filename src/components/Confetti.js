import React from "react";
import ConfettiGif from "../img/confetti.gif";

const Confetti = () => {

    return (
        <img alt="confetti" src={ConfettiGif} style={{positon: "absolute", top: "0", left: "0"}}/>
    )

}

export default Confetti;