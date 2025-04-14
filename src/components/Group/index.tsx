import { Wrap, WrapProps } from "@styled-system/jsx";
import { FC, PropsWithChildren } from "react";
import { groupRecipe, GroupVariant } from "./style";

type GroupProps = PropsWithChildren<
  {
    label?: string;
  } & Pick<WrapProps, "flexDirection"> &
    GroupVariant
>;

export const Group: FC<GroupProps> = ({
  children,
  flexDirection,
  variant,
  label,
}) => {
  const classes = groupRecipe({ variant, withLabel: !!label });
  return (
    <>
      <Wrap
        className={classes.root}
        flexDirection={flexDirection}
        gap="4"
        align="center"
        justify="center"
      >
        {children}
        {label && <span className={classes.label}>{label}</span>}
      </Wrap>
    </>
  );
};
