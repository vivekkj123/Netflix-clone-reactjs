import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__content">
        <h1 className="Banner__title">Money Heist</h1>
        <div className="Banner__buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="Banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          sapiente, accusantium nisi odio vel quibusdam. Dignissimos blanditiis,
          dolorem fuga impedit aut, ipsa incidunt animi in commodi eveniet, sed
          consequatur quis.
        </h1>
      </div>
      <div className="fade__bottom"></div>
    </div>
  );
}

export default Banner;
