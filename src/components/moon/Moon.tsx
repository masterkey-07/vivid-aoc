import styled from "styled-components";
import MoonImage from "../../assets/moon.png";
import SpaceManImage from "../../assets/space-man.png";

const StyledMoon = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  /* background-color: rgb(200, 200, 200); */

  border-radius: 100%;

  height: 50vh;
  width: 50vh;

  .moon {
    position: absolute;
    transform: scale(1.5);
    z-index: 2;
  }

  .space-man {
    z-index: 2;
    position: absolute;
    right: -15rem;
    top: -15rem;

    transform: scale(0.8);
  }

  .moon-shadow {
    z-index: 1;
    position: absolute;

    width: 38rem;
    height: 38rem;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    /* background-color: rgb(200, 200, 200); */

    border-radius: 100%;

    box-shadow: -40px 0px 50px 10px rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
  }
`;

export const Moon = () => {
  return (
    <StyledMoon>
      <img className="moon" src={MoonImage} />
      <img className="space-man" src={SpaceManImage} />
      <div className="moon-shadow" />
    </StyledMoon>
  );
};
