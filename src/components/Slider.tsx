import React, { FC, useState } from "react";
import "./Slider.css";
import {
  AppSliderPointStyle,
  AppSliderSectionStyle,
  AppSliderStyle,
  AppSubSliderPointStyle,
} from "./Slider.style";

type SliderPointProps = {
  content: string;
  selected?: boolean;
  onSelection: () => void;
};

const SliderPoint: FC<SliderPointProps> = ({
  content,
  selected,
  onSelection,
}) => {
  return (
    <AppSliderSectionStyle
      style={{
        height: selected ? "52em" : "12em",
        alignItems: "center",
        justifyContent: selected ? "flex-start" : "center",

        flexFlow: "column",
      }}
    >
      <div
        style={{
          height: "100%",
          margin: selected ? "3.5em 0" : "",
          display: selected ? "flex" : "flex",
          flexFlow: "column",
          justifyContent: selected ? "space-between" : "center",
          alignItems: "center",
        }}
      >
        <AppSliderPointStyle
          content={content}
          style={{ marginBottom: selected ? "7em" : "" }}
          onClick={onSelection}
        ></AppSliderPointStyle>
        {selected ? (
          <div
            style={{
              height: "33em",
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AppSubSliderPointStyle></AppSubSliderPointStyle>
            <AppSubSliderPointStyle></AppSubSliderPointStyle>
            <AppSubSliderPointStyle></AppSubSliderPointStyle>
            <AppSubSliderPointStyle></AppSubSliderPointStyle>
          </div>
        ) : (
          <React.Fragment />
        )}
      </div>
    </AppSliderSectionStyle>
  );
};

export const Slider = () => {
  const [selectedPointIndex, setSelectedPoint] = useState(0);

  const pipelines = [
    "Pipeline 1",
    "Pipeline 2",
    "Pipeline 3",
    "Pipeline 4",
    "Pipeline 5",
  ];

  return (
    <AppSliderStyle>
      {pipelines.map((content, index) => {
        return (
          <SliderPoint
            key={content}
            content={content}
            onSelection={() => setSelectedPoint(index)}
            selected={selectedPointIndex === index}
          />
        );
      })}
    </AppSliderStyle>
  );
};
