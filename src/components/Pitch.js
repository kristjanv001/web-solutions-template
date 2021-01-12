import React from "react";
import SectionItem from "./SectionItem";
import PitchCard from "./PitchCard";
import { HiOutlineCode, HiOutlinePuzzle } from "react-icons/hi";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Pitch() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <SectionItem
      mainHeading="Why John Doe?"
      subHeading="Creating art has become a huge part of John's life."
    >
      <div className="pitch-cards">
        <Carousel responsive={responsive} containerClass="carousel-container">
          <PitchCard
            cardTitle="Modern Technology"
            icon={<HiOutlineCode size="3.5em" />}
          >
            John's development stack consists of tools also used by companies
            such as Facebook, Airbnb and Netflix. His websites are fast and
            scalable.
          </PitchCard>
          <PitchCard
            cardTitle="Problem Solver"
            icon={<HiOutlinePuzzle size="3.5em" />}
          >
            He's not limited to any specific technology. If a new tool needs to
            be learned for a project, then so be it.
          </PitchCard>
        </Carousel>
      </div>
    </SectionItem>
  );
}
