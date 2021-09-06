import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, posterUrl } from "../../Constants";
import "./Banner.css";
function Banner() {
  const [Trending, setTrending] = useState("");
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setTrending(res.data.results[0]);
      });
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="Banner"
      style={{
        background: Trending ? `url(${posterUrl + Trending.backdrop_path})` : "",
      }}
    >
      <div className="Banner__content">
        <h1 className="Banner__title">
          {Trending?.title || Trending?.name || Trending?.original_name}
        </h1>
        <div className="Banner__buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="Banner__description">{truncate(Trending?.overview, 150)}</h1>
      </div>
      <div className="fade__bottom"></div>
    </div>
  );
}

export default Banner;
