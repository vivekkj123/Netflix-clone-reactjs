import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./RowPost.css";
import { API_KEY, posterUrl } from "../../Constants";
import YouTube from "react-youtube";
function RowPost({ title, islarge, url }) {
  const [Movies, setMovies] = useState([]);
  const [Trailerurl, setTrailerurl] = useState();
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results[0]);
    }); // eslint-disable-next-line
  }, []);
  const handleUrl = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setTrailerurl(response.data.results[0]);
        }
      });
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {Movies.map((movie) => (
          <img
            onClick={handleUrl(movie.id)}
            key={movie.id}
            src={posterUrl + movie.backdrop_path}
            alt=""
            className={islarge ? "poster" : "smallPoster"}
          />
        ))}
        {Trailerurl && <YouTube id={Trailerurl.key} opts={opts} />}
      </div>
    </div>
  );
}

export default RowPost;
