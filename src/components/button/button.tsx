import clsx from "clsx";
import { FC } from "react";
import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

const ButtonComponent: FC<ButtonProps> = ({
  buttonRef,
  children,
  bg = "white",
  text = "black",
  opacity,
  className,
  isRounded,
  ...propsElement
}) => {
  return (
    <button ref={buttonRef} {...propsElement} className={clsx(styles['button'], styles['button--remove-style'],className)}>
      {children}
    </button>
  );
};

export default ButtonComponent;
