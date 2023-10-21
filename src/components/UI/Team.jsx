import React from "react";
import "../../styles/team.css";
import team01 from "../../images/team-01.png";

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>
        <div className="team__wrapper">
          <div className="team__item">
            <div className="team__img">
              <img src={team01} alt="" />
            </div>
            <div className="team__details">
              <h4>Peter Akerele</h4>
              <p className="description">Position A</p>

              <div className="team__member-social">
                <span>
                  <i class="ri-linkedin-line"></i>
                </span>
                <span>
                  <i class="ri-twitter-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
