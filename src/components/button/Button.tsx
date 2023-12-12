import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
  position: fixed;
  bottom: 5vh;
  z-index: 10;
  font-size: 3rem;
  padding: 1rem;
  background-color: transparent;
  color: var(--gold);
  border: 4px solid var(--gold);
  border-radius: 12px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;

  &:hover {
    box-shadow: 0 0 10px 0 var(--gold);
  }

  transition: 50ms ease-in-out;

  user-select: none;

  &:active {
    transition-duration: 0;
    box-shadow: 0 0 20px 0 var(--gold);
  }
`;

const Button = ({
  text,
  link,
  isBack = false,
  style = {},
}: {
  text: string;
  link: string;
  isBack?: boolean;
  style?: React.CSSProperties;
}) => {
  const navigate = useNavigate();

  return (
    <StyledButton
      onClick={() => {
        navigate(link);
      }}
      style={{
        ...style,
        width: "15rem",
        right: isBack ? "" : "5vw",
        left: isBack ? "calc(20% + 5vw)" : "",
      }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
