import { Axis } from "../types";

export interface AxisCommand {
  axis: Axis;
  value: number;
}

export interface ButtonCommand {
  button: number;
  pressed: boolean;
}

export interface AppCommand {
  button?: ButtonCommand;
  axis?: AxisCommand;
}
