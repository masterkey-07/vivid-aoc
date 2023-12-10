import { ReactNode } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  position: fixed;
  left: 20%;
  top: 0;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBorder = styled.div`
  width: auto;
  max-width: 70%;
  border: 2px solid white;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 12px;

  font-weight: bold;
  font-size: 2.8rem;
  color: white;
  text-shadow: 0 0 3px black;
`;

type BasicContentProps = {
  children: ReactNode;
};

export const Bold = styled.b`
  color: var(--gold);
  text-shadow: 0 0 2px white;
`;

export const BasicContent = ({ children }: BasicContentProps) => {
  return (
    <ContentContainer style={{}}>
      <ContentBorder>{children}</ContentBorder>
    </ContentContainer>
  );
};
