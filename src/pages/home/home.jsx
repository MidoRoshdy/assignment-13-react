import React from "react";
import "./home.css";
import avatarImg from "../../assets/avataaars.svg";
import StarDivider from "../../components/StarDivider";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="container">
          <img src={avatarImg} alt="Avatar" className="avatar" />
          <h1 className="home-title">START FRAMEWORK</h1>
          <StarDivider />
          <p className="home-subtitle">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </div>
  );
}
