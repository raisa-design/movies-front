import React from "react";

interface Props {
  icon?: string;
  className?: string;
  text: string;
  variant?: "primary" | "secondary" | "danger";
}

import "./styles.css";

const Button: React.FC<Props> = ({
  icon,
  text,
  className,
  variant = "primary",
}) => {
  return (
    <button className={`button ${variant} ${className}`}>
      {icon && <img src={icon} alt={text} height={20} width={20} />}
      {text}
    </button>
  );
};

export default Button;
