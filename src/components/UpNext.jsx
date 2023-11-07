import React from "react";

import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledImage = styled("img")({
  width: "10vw",
  height: "20vh",
});

const UpNext = ({ movies }) => {
  console.log("UPCOMING", movies);
  return (
    <Box sx={{ width: "35%", marginLeft: 2, color: "white" }}>
      <Typography sx={{ color: "#f5c518", fontWeight: "bolder", fontSize: 20 }}>
        Up Next
      </Typography>

      {}
      {movies.map((movie) => (
        <Box
          id={movie.id}
          sx={{
            display: "flex",
            marginTop: 2,
            marginRight: 1,
            backgroundColor: "#121212",
          }}
        >
          <StyledImage
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Container sx={{ backgroundColor: "#121212", padding: 1 }}>
            <h3 style={{ backgroundColor: "#121212" }}>{movie.title}</h3>
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default UpNext;
