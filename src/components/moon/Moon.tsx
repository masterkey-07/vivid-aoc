import styled from "styled-components";
import MoonImage from "../../assets/moon.png";
import SpaceManImage from "../../assets/space-man.png";
import Button from "../button/Button";
import { Fragment } from "react";

const StyledMoon = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 100%;

  height: 50vh;
  width: 50vh;

  .moon {
    position: absolute;
    transform: scale(1.5);
    z-index: 2;

    height: 50vh;
    width: 50vh;
    -webkit-user-drag: none;
    user-select: none;

    animation: mooning 360s ease-in-out infinite;
  }

  .space-man {
    z-index: 2;
    position: absolute;
    right: -15vw;
    top: -30vh;

    transform: scale(0.8);

    height: 50vh;
    width: 50vh;
    user-select: none;
    -webkit-user-drag: none;

    animation: floating 3s ease-in-out infinite;
  }

  @keyframes mooning {
    0% {
      transform: scale(1.5) rotateZ(0deg);
    }

    100% {
      transform: scale(1.5) rotateZ(360deg);
    }
  }

  @keyframes floating {
    0% {
      transform: scale(0.8) translate(0px, 0px);
    }

    50% {
      transform: scale(0.8) translate(0px, 15px);
    }

    100% {
      transform: scale(0.8) translate(0px, 0px);
    }
  }

  .moon-shadow {
    z-index: 1;
    position: absolute;
    height: 50vh;
    width: 50vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    box-shadow: -40px 0px 50px 10px rgba(0, 0, 0, 0.5);
    user-select: none;
  }

  span {
    z-index: 2;
    position: absolute;

    user-select: none;

    left: 50%;
    top: 50%;

    text-align: center;

    transform: translate(-50%, -50%);

    font-size: 7vw;
    font-weight: 700;

    color: white;

    text-shadow: 0 0 10px black;
  }

  &::after {
    content: "";
  }
`;

export const Moon = () => {
  return (
    <Fragment>
      <StyledMoon>
        <img className="moon" src={MoonImage} />
        <img className="space-man" src={SpaceManImage} />
        <div className="moon-shadow" />
        <span>Vivid AOC</span>
      </StyledMoon>
      <Button text="Começar!" link="/introduction/first-section" />
    </Fragment>
  );
};
