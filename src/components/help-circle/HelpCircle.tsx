import { Fragment, ReactNode, useState } from "react";

type HelpCircleProps = {
  circlePosition: {
    top: number;
    left: number;
  };

  tooltipPosition: {
    top: number;
    left: number;
  };

  children: ReactNode;
  width: string;
  height: string;
};

export const HelpCircle = ({
  width,
  height,
  children,
  circlePosition,
  tooltipPosition,
}: HelpCircleProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <div
        onClick={() => setIsOpen((state) => !state)}
        style={{
          position: "absolute",
          top: `${circlePosition.top}%`,
          left: `${circlePosition.left}%`,
          width,
          height,
          backgroundColor: "transparent",
          borderRadius: "50%",
          border: "5px dotted var(--gold)",
          cursor: "pointer",
        }}
      />
      {isOpen ? (
        <div
          style={{
            fontSize: "1rem",
            position: "absolute",
            top: `${tooltipPosition.top}%`,
            left: `${tooltipPosition.left}%`,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "10px",
            borderRadius: "5px",
            width: "30rem",
          }}
        >
          {children}
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};
