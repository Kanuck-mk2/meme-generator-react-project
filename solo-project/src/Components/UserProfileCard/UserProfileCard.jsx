import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/profile.png";

export const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="profileImage" />
        <div className="profile-title">About Me</div>
        <div className="profile-description">
          This woman helped me create a profile web card for a solo project using React. I want
          to learn programming and become a web developer with aspirations for
          Machine Learning and AI.
        </div>
        <div className="profile-interest-title">Her Interests</div>
        <div className="profile-interest">
          After a long day of web deving, she enjoys boxing up and one pumping the kiddies and then doing the griddy on them in Fortnite.
          GG no Re.
        </div>
        <div className="profile-button">
          <a href="mailto:some.chick@email.com">Contact Me</a>
        </div>
        <div className="profile-button2">
          <a href="http://github.com/Kanuck">GitHub</a>
        </div>
      </div>
    </div>
  );
};

