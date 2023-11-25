import styled from "styled-components";

const StyledMoon = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  background-color: rgb(200, 200, 200);

  border-radius: 100%;

  height: 50vh;
  width: 50vh;

  box-shadow: -30px 0px 40px 0px rgba(0, 0, 0, 0.5);
`;

export const Moon = () => {
  return <StyledMoon className="fake-moon" />;
};
