import { Wrap } from "@styled-system/jsx";
import { FC, PropsWithChildren } from "react";
import { groupRecipe, GroupVariant } from "./style";
import { Orientation } from "@shared/types";
import { GroupContext } from "@shared/model/GroupContext";

type GroupProps = PropsWithChildren<
  {
    label?: string;
    orientation?: Orientation
  } &
    GroupVariant
>;

export const Group: FC<GroupProps> = ({
  children,
  orientation,
  variant,
  label,
}) => {
  const classes = groupRecipe({ variant, withLabel: !!label, orientation });
  return (
    <>
      <Wrap
        className={classes.root}
        gap="4"
        align="center"
        justify="flex-start"
      >
        <GroupContext.Provider value={{orientation}}>
          {children}
        </GroupContext.Provider>
        {label && <span className={classes.label}>{label}</span>}
      </Wrap>
    </>
  );
};
