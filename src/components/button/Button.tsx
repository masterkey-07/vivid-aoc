import { useNavigate } from "react-router-dom";

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
    <button
      onClick={() => {
        navigate(link);
      }}
      style={{
        ...style,
        position: "fixed",
        right: isBack ? "" : "5vw",
        left: isBack ? "20%" : "",
        bottom: "5vh",
        zIndex: "10",
        fontSize: "3rem",
        padding: "1rem",
        backgroundColor: "transparent",
        color: "gold",
        border: "2px solid gold",
        borderRadius: "12px",
        boxShadow: "0 0 10px 0 gold",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
