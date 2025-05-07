import { ButtonControlProps } from "@features/control/ui/ButtonControl";
import { SliderControlProps } from "@features/control/ui/SliderControl";
import { Orientation, Variant } from "@shared/types";

export interface PanelsListItem {
  title: string;
  path: string;
}

export interface Panel {
  title: string;
  groups: GroupItem[];
}

interface GroupItem {
  label?: string;
  orientation?: Orientation;
  variant?: Variant;
  controls: (ButtonControlProps | SliderControlProps)[];
}
