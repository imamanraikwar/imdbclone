import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MovieCard = ({ movie, title }) => {
  return (
    <>
      <Card
        sx={{
          width: 200,
          marginTop: 1,
          marginRight: 2.5,
          color: "white",
        }}
      >
        <CardMedia
          sx={{ height: 250 }}
          image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          title="green iguana"
        />
        <CardContent sx={{ backgroundColor: "#1a1a1a" }}>
          <div style={{ backgroundColor: "transparent" }}>
            <StarIcon
              sx={{
                fontSize: "16px",
                color: "yellow",
                backgroundColor: "transparent",
              }}
            />{" "}
            {movie.vote_average}
          </div>

          <Typography
            sx={{
              marginTop: 1,
              fontSize: "16px",
              backgroundColor: "transparent",
            }}
          >
            {movie.title}
          </Typography>
          <div
            style={{
              display: "flex",
              padding: 5,
              margin: "auto",
              backgroundColor: "#2c2c2c",
              color: "#5799ef",
              marginTop: 30,
              justifyContent: "center",
              borderRadius: "5%",
              fontWeight: "bolder",
            }}
          >
            <AddIcon sx={{ background: "transparent", fontWeight: "bolder" }} />
            <Typography
              sx={{ background: "transparent", fontWeight: "bolder" }}
            >
              Watchlist
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              color: "white",
              padding: 5,
              marginTop: 20,
              backgroundColor: "transparent",
              justifyContent: "center",
              "&:hover": { backgroundColor: "yellow" },
            }}
          >
            <PlayArrowIcon sx={{ backgroundColor: "transparent" }} /> Trailer
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
