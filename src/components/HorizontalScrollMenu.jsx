import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import MovieCard from "../components/MovieCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { Container, Typography } from "@mui/material";

const HorizontalScrollMenu = ({ nowPlaying, title }) => {
  const [selected, setSelected] = useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <div
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
        style={{ marginTop: 150 }}
      >
        <ChevronLeftIcon
          sx={{ color: "white", fontSize: 50 }}
          onClick={() => scrollPrev()}
        />
      </div>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <div
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
        style={{ marginTop: 150 }}
      >
        <ChevronRightIcon sx={{ color: "white", fontSize: 50 }} />
      </div>
    );
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          color: "white",
          marginTop: 5,
          fontSize: 15,
          justifyContent: "left",
          alignContent: "baseline",
        }}
      >
        <HorizontalRuleIcon
          sx={{
            color: "yellow",
            transform: "rotate(90deg)",
            fontSize: 40,
          }}
        />
        <Typography sx={{ fontSize: 25, fontWeight: "bold" }}>
          {title}
        </Typography>
        <ChevronRightIcon sx={{ color: "yellow", fontSize: 40 }} />
      </Container>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {nowPlaying.map((movie) => (
          <MovieCard
            movie={movie}
            onClick={handleClick(movie.id)}
            selected={isItemSelected(movie.id)}
            VisibilityContext={VisibilityContext}
            title={"Fan favorites"}
          />
        ))}
      </ScrollMenu>
    </>
  );
};

export default HorizontalScrollMenu;
