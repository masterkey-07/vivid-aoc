import styled from "styled-components";

export const AppSliderStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  font-size: 0.9vh;

  position: fixed;

  left: 5%;
  top: 50%;

  transform: translateY(-50%);
`;

export const AppSliderSectionStyle = styled.div<{ selected: boolean }>`
  font-size: inherit;

  height: ${({ selected }) => (selected ? "52em" : "12em")};
  width: auto;

  display: flex;
  justify-content: ${({ selected }) => (selected ? "flex-start" : "center")};
  align-items: center;
  flex-flow: column;

  position: relative;

  &::before {
    content: "";

    position: absolute;

    display: block;

    width: 5px;
    left: 50%;
    transform: translateX(-50%);
    height: inherit;

    background-color: white;
  }
`;

type AppSliderPointStyleProps = {
  content: string;
  selected: boolean;
};

export const AppSliderSectionSpacingStyle = styled.div<{ selected: boolean }>`
  height: 100%;
  margin: ${({ selected }) => (selected ? "3.5em 0" : "")};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const AppSliderPointStyle = styled.div<AppSliderPointStyleProps>`
  position: relative;
  font-size: inherit;
  height: calc(5em - 8px);
  width: calc(5em - 8px);

  font-weight: 700;

  border: 4px solid rgb(255, 217, 0);

  border-radius: 100%;

  margin-bottom: ${({ selected }) => (selected ? "7em" : "")};

  box-shadow: ${({ selected }) => (selected ? "0 0 20px 0 yellow" : "none")};

  background-color: ${({ selected }) =>
    selected ? "rgba(255, 217, 0, 1)" : "rgba(255, 217, 0, 0.3)"};

  z-index: 5;

  &::after {
    content: "${({ content }) => content}";
    position: absolute;
    right: 0;
    top: 50%;

    transform: translateX(125%) translateY(-50%);

    font-size: 1.5rem;
    color: rgb(255, 217, 0);
    text-shadow: 0 0 1px rgb(255, 255, 255);
  }
`;

export const AppSubSliderSectionStyle = styled.div`
  height: 33em;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

export const AppSubSliderPointStyle = styled.div<{ selected: boolean }>`
  font-size: inherit;
  position: relative;
  height: calc(3.5em - 6px);
  width: calc(3.5em - 6px);

  font-weight: 600;

  border: 3px solid rgb(255, 217, 0);

  background-color: ${({ selected }) =>
    selected ? "rgba(255, 217, 0, 1)" : "rgba(255, 217, 0, 0.3)"};

  border-radius: 100%;

  z-index: 5;

  box-shadow: ${({ selected }) => (selected ? "0 0 20px 0 yellow" : "none")};

  &::after {
    content: "${({ content }) => content}";
    position: absolute;
    right: 0;
    top: 50%;

    transform: translateX(125%) translateY(-50%);

    font-size: 1rem;
    color: rgb(255, 217, 0);
    text-shadow: 0 0 1px rgb(255, 255, 255);
  }
`;
