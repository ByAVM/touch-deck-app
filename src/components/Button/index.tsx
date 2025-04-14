import { FC, HTMLAttributes } from "react";
import { buttonRecipe } from "./style";
import { cx } from "@styled-system/css";

export const Button: FC<
  HTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  const classes = buttonRecipe();

  return (
    <button {...props} className={cx(classes.root, className)}>
      {children}
    </button>
  );
};
