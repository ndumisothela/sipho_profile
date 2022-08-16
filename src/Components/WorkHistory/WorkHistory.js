import React from "react";
import "./WorkHistory.css";
import psg from "./../../Components/Assets/psg.png";
import sygnia from "./../../Components/Assets/sygnia.png";
import sanlam from "./../../Components/Assets/sanlam.png";
import zz from "./../../Components/Assets/zz.png";

const WorkHistory = () => {
  return (
    <div className="work_history_container">
      <p className="wh_title">WORK HISTORY</p>
      <div className="work_sipho">
        <img className="work_image" src={zz} alt="work_image" />
        <div className="work_cover">
          <div className="psg_cover">
            <img className="psg_image" src={psg} alt="psg_logo" />
            <div className="psg_text">
              <h2>PSG Asset Management</h2>
              <p>
                Fund Specialist for PSG Asset Management and marketing the range
                of unit trust funds to retail multi managers and high profile
                financial advisory practices within the independent and
                corporate market.
              </p>
            </div>
          </div>
          <div className="psg_cover">
            <img className="psg_image" src={sygnia} alt="psg_logo" />
            <div className="psg_text">
              <h2>Sygnia Asset Management</h2>
              <p>
                Presenting investment strategies to advisors - Liaising with
                internal departments - Keeping up to date with competitor
                products and service offerings. - Providing training to advisors
                on Sygnia LISP platform, multi-managed solutions, Unit Trusts
                and Exchange traded funds.
              </p>
            </div>
          </div>
          <div className="psg_cover">
            <img className="psg_image" src={sanlam} alt="psg_logo" />
            <div className="psg_text">
              <h2>Sanlam Broker Consultant</h2>
              <p>
                Product and System Training - Relationship Management -
                Marketing - Business Development - Client engagement - financial
                planning - client solutions building - account management -
                investment and life products marketing investment and life
                products marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
