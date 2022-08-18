import React from "react";
import "./ThingsIdo.css";
import gh from "./../../Components/Assets/gh.jpg";
import gym from "./../../Components/Assets/gym.jpg";
import djsparty from "./../../Components/Assets/djsparty.jpg";

const ThingsIdo = () => {
  return (
    <div className="things_I_do_container">
      <p className="things_title">THINGS I DO </p>
      <div className="investment_plan">
        <img className="image" src={gh} alt="investment_image" />
        <div className="invest_title">
          <h2>INVESTMENTS</h2>
          <p>
            Investment management is about managing money by investing it in a
            variety of asset classes including equities or shares and bonds.
            Working in this area, which is also known as asset management or
            fund management, mean using my brain every day to try to outwit
            thousands of other participants in the financial markets.
          </p>
        </div>
      </div>
      <div className="workout_plan">
        <img className="image" src={gym} alt="workout_image" />
        <div className="invest_title">
          <h2>WORKOUT</h2>
          <p>
            Health body health mind, I need to always stay fit to produce the
            best results posssible.{" "}
          </p>
        </div>
      </div>
      <div className="dj_plan">
        <img className="image" src={djsparty} alt="dj_image" />
        <div className="invest_title">
          <h2>Deejay</h2>
          <p>I have a passion for MUSIC. </p>
        </div>
      </div>
    </div>
  );
};

export default ThingsIdo;
