export type Axis =
  | "x"
  | "y"
  | "z"
  | "rx"
  | "ry"
  | "rz"
  | "slider"
  | "dialslider";

export interface Control {
  devNo: number;
  type: "button" | "slider";
}

export type Variant = 'blue' | 'red' | 'orange' | 'green'

export type Orientation = 'horizontal' | 'vertical'