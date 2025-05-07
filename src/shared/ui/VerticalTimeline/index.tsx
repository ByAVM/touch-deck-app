import { FC, ReactNode } from "react";
import {
  verticalTimelineItemRecipe,
  VerticalTimelineItemVariant,
  verticalTimelineRecipe,
} from "./style";
import { Circle, ThemedBlock } from "@styled-system/jsx";

interface Props {
  items: {
    title: ReactNode;
    description?: string;
    completed?: boolean;
  }[];
}
const VerticalTimelineItem: FC<
  Props["items"][number] & VerticalTimelineItemVariant
> = ({ title, completed, description, position }) => {
  const classes = verticalTimelineItemRecipe({ position, completed });

  return (
    <li className={classes.root}>
      <ThemedBlock className={classes.content}>
        <Circle className={classes.point} size="4" />
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </ThemedBlock>
    </li>
  );
};

export const VerticalTimeline: FC<Props> = ({ items }) => {
  const timelineClass = verticalTimelineRecipe();

  return (
    <ul className={timelineClass}>
      {items.map((item, i) => (
        <VerticalTimelineItem
          key={i}
          {...item}
          position={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </ul>
  );
};
