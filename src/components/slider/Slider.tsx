import { chapters } from "../../constants/chapters";
import {
  AppSliderPointStyle,
  AppSliderSectionStyle,
  AppSliderStyle,
  AppSubSliderPointStyle,
  AppSliderSectionSpacingStyle,
  AppSubSliderSectionStyle,
} from "./Slider.style";
import React, { FC, Fragment, useState } from "react";

type SliderPointProps = {
  title: string;
  subtitles: string[];
  selected: boolean;
  onSelection: () => void;
};

type SubSliderPointProps = {
  selected: boolean;
  subtitles: string[];
};

const SubSliderPoint: FC<SubSliderPointProps> = ({ selected, subtitles }) => {
  if (!selected) return <Fragment />;

  return (
    <AppSubSliderSectionStyle>
      {subtitles.map((subtitle) => (
        <AppSubSliderPointStyle content={subtitle} />
      ))}
    </AppSubSliderSectionStyle>
  );
};

const SliderPoint: FC<SliderPointProps> = (props) => {
  const { onSelection, selected, subtitles, title } = props;

  return (
    <AppSliderSectionStyle selected={selected}>
      <AppSliderSectionSpacingStyle selected={selected}>
        <AppSliderPointStyle
          content={title}
          selected={selected}
          onClick={onSelection}
        />
        <SubSliderPoint selected={selected} subtitles={subtitles} />
      </AppSliderSectionSpacingStyle>
    </AppSliderSectionStyle>
  );
};

export const Slider = () => {
  const [selectedPointIndex, setSelectedPoint] = useState(0);

  return (
    <AppSliderStyle>
      {chapters.map((chapter, index) => {
        return (
          <SliderPoint
            key={chapter.title}
            title={chapter.title}
            subtitles={chapter.subtitles}
            onSelection={() => setSelectedPoint(index)}
            selected={selectedPointIndex === index}
          />
        );
      })}
    </AppSliderStyle>
  );
};
