import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, posterUrl } from "../../Constants";
import "./Banner.css";
function Banner() {
  const [Trending, setTrending] = useState('')
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
        setTrending(res.data.results[0]);
    })
}, [])
  return (
    <div className="Banner" style={{background: Trending?`url(${posterUrl + Trending.poster_path})`:''}}>
      <div className="Banner__content">
        <h1 className="Banner__title">{Trending.title}</h1>
        <div className="Banner__buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="Banner__description">
          {Trending.overview}
        </h1>
      </div>
      <div className="fade__bottom"></div>
    </div>
  );
}

export default Banner;
