import React, { useState, useEffect } from "react";

//API
import { getCategoryMovies } from "../services/api";
import { API_NOW_PLAYING, API_UPCOMING } from "../constants/constants";

//components
import Header from "../components/common/Header";
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import HorizontalScrollMenu from "../components/HorizontalScrollMenu";

const response = await getCategoryMovies(API_UPCOMING);

const Home = () => {
  const [nowPlaying, setNow_Playing] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nowPlaying = await getCategoryMovies(API_NOW_PLAYING);
      setNow_Playing(nowPlaying.results);
    };
    fetchData();
  }, []);

  const getData = async () => {
    //const res = await getCategoryMovies(API_UPCOMING);
    let array = response.results;
    setUpcoming(array.sort(() => Math.random() - Math.random()).slice(0, 3));
  };

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getData();
    }, 10000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Banner movies={nowPlaying} />
        <UpNext movies={upcoming} />
      </div>

      <HorizontalScrollMenu nowPlaying={nowPlaying} title={"Top favorite"} />
    </>
  );
};

export default Home;
