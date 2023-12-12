import { useLocation, useNavigate } from "react-router-dom";
import { chapters } from "../../constants/chapters";
import {
  AppSliderPointStyle,
  AppSliderSectionStyle,
  AppSliderStyle,
  AppSubSliderPointStyle,
  AppSliderSectionSpacingStyle,
  AppSubSliderSectionStyle,
} from "./Slider.style";
import { FC, Fragment } from "react";

type SliderPointProps = {
  title: string;
  subtitles: string[];
  selected: boolean;
  chapterKey: string;
};

type SubSliderPointProps = {
  selected: boolean;
  subtitles: string[];
  chapterKey: string;
};

const indexMap: Record<number, string> = {
  0: "first",
  1: "second",
  2: "third",
  3: "fourth",
};

const SubSliderPoint: FC<SubSliderPointProps> = ({
  selected,
  subtitles,
  chapterKey,
}) => {
  const location = useLocation();

  const navigate = useNavigate();

  if (!selected) return <Fragment />;

  return (
    <AppSubSliderSectionStyle>
      {subtitles.map((subtitle, index) => {
        const sectionPath = indexMap[index];

        return (
          <AppSubSliderPointStyle
            onClick={() => navigate(`${chapterKey}/${sectionPath}-section`)}
            selected={location.pathname.includes(sectionPath)}
            content={subtitle}
          />
        );
      })}
    </AppSubSliderSectionStyle>
  );
};

const SliderPoint: FC<SliderPointProps> = (props) => {
  const { selected, subtitles, title, chapterKey } = props;

  const navigate = useNavigate();

  return (
    <AppSliderSectionStyle selected={selected}>
      <AppSliderSectionSpacingStyle selected={selected}>
        <AppSliderPointStyle
          onClick={() => navigate(`${chapterKey}/first-section`)}
          content={title}
          selected={selected}
        />
        <SubSliderPoint
          chapterKey={chapterKey}
          selected={selected}
          subtitles={subtitles}
        />
      </AppSliderSectionSpacingStyle>
    </AppSliderSectionStyle>
  );
};

export const Slider = () => {
  const location = useLocation();

  return (
    <AppSliderStyle>
      {chapters.map((chapter) => {
        return (
          <SliderPoint
            key={chapter.key}
            chapterKey={chapter.key}
            title={chapter.title}
            subtitles={chapter.subtitles}
            selected={location.pathname.includes(chapter.key)}
          />
        );
      })}
    </AppSliderStyle>
  );
};
