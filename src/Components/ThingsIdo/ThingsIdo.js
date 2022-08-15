import React from "react";
import "./ThingsIdo.css";
import ivn from "./../../Components/Assets/ivn.jpg";
import gym from "./../../Components/Assets/gym.jpg";

const ThingsIdo = () => {
  return (
    <div className="things_I_do_container">
      <p className="things_title">THINGS I DO </p>
      <div className="investment_plan">
        <img className="invest_image" src={ivn} alt="investment_image" />
        <div className="invest_title">
          <h2>INVESTMENTS</h2>
          <p>
            Investment management is about managing money by investing it in a
            variety of asset classes including equities or shares and bonds.
            Working in this area, which is also known as asset management or
            fund management, mean using my brain every day to try to outwit
            thousands of other participants in the financial markets.
          </p>
          <p>
            {" "}
            My maindaily task is to analyse individual companies and try to
            assess their prospects in order to try to find out which companies
            are likely to outperform the market. You could be looking at many
            different types of industry and analysing anything from iPhones to
            oil rigs or organic food trends. My main business objectives of is
            to provide a good investment for clients – and good customer service
            too.
          </p>
        </div>
      </div>
      <div className="workout_plan">
        <img className="workout_image" src={gym} alt="workout_image" />
        <div className="invest_title">
          <h2>WORKOUT</h2>

          <p>
            Health body health mind, I need to always stay fit to produce the
            best results posssible.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThingsIdo;
