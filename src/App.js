import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

//2:01:52 parei o yt
export default () => {
  const [movielist, setMovielist] = useState([]);

  const [featuredData, setFeaturedData] = useState(null);

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();

      setMovielist(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChose = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChose];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  console.log(movielist);
  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movielist.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com
        <span role="img" aria-aria-label="coração">
          💖
        </span>{" "}
        Por <a href="https://github.com/cristianm9">Cristian</a> <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site Themoviedb.org
      </footer>
      {movielist.length <= 0 && (
        <div className="loading">
          <img
            src="https://img.17qq.com/images/gmggkgdhdcv.jpeg"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
};
