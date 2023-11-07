import React from "react";
import { Box, styled } from "@mui/material";
//carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const StyledBox = styled(Box)`
  margin-top: 5px;
`;

const SlidderImage = styled("img")({});

const Banner = ({ movies }) => {
  return (
    <>
      <StyledBox style={{ width: "70%" }}>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
        >
          {movies.map((movie) => (
            <div key={movie.id}>
              <SlidderImage
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </Carousel>
      </StyledBox>
    </>
  );
};

export default Banner;
