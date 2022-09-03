import React from "react";
import "./slider.css";
import SliderCard from "./SliderCard/SliderCard";

export default function Slider() {
  return (
    <div id="slider">
      <SliderCard />
      <SliderCard />
      <SliderCard />
    </div>
  );
}
