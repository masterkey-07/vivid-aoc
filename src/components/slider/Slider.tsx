import { useLocation } from "react-router-dom";
import { chapters } from "../../constants/chapters";
import {
  AppSliderPointStyle,
  AppSliderSectionStyle,
  AppSliderStyle,
  AppSubSliderPointStyle,
  AppSliderSectionSpacingStyle,
  AppSubSliderSectionStyle,
} from "./Slider.style";
import { FC, Fragment, useEffect, useState } from "react";

type SliderPointProps = {
  title: string;
  subtitles: string[];
  selected: boolean;
};

type SubSliderPointProps = {
  selected: boolean;
  subtitles: string[];
};

const indexMap: Record<number, string> = {
  0: "first",
  1: "second",
  2: "third",
  3: "fourth",
};

const SubSliderPoint: FC<SubSliderPointProps> = ({ selected, subtitles }) => {
  const location = useLocation();

  if (!selected) return <Fragment />;

  return (
    <AppSubSliderSectionStyle>
      {subtitles.map((subtitle, index) => (
        <AppSubSliderPointStyle
          selected={location.pathname.includes(indexMap[index])}
          content={subtitle}
        />
      ))}
    </AppSubSliderSectionStyle>
  );
};

const SliderPoint: FC<SliderPointProps> = (props) => {
  const { selected, subtitles, title } = props;

  return (
    <AppSliderSectionStyle selected={selected}>
      <AppSliderSectionSpacingStyle selected={selected}>
        <AppSliderPointStyle content={title} selected={selected} />
        <SubSliderPoint selected={selected} subtitles={subtitles} />
      </AppSliderSectionSpacingStyle>
    </AppSliderSectionStyle>
  );
};

export const Slider = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <AppSliderStyle>
      {chapters.map((chapter, index) => {
        return (
          <SliderPoint
            key={chapter.title}
            title={chapter.title}
            subtitles={chapter.subtitles}
            selected={location.pathname.includes(chapter.key)}
          />
        );
      })}
    </AppSliderStyle>
  );
};
