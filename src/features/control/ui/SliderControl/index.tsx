import { Slider } from "@ark-ui/react";
import { sliderControlRecipe, SliderVariant } from "./style";
import { FC, useCallback } from "react";
import { Axis, Control } from "@shared/types";
import { useClient } from "@features/client/hooks/useClient";
import { useDebounceCallback } from "usehooks-ts";

const MAX = 1.0;
const MIN = 0.0;
const STEP = 0.02;

export type SliderControlProps = {
    label?: string,
    axis: Axis
} & Control & SliderVariant;

export const SliderControl: FC<SliderControlProps> = ({ orientation, label, axis, variant }) => {
  const classes = sliderControlRecipe({orientation, variant});
  const client = useClient()

  const handleChange = useCallback((details: Slider.ValueChangeDetails) => {
    client.sendCommand({
        axis: {
            axis,
            value: details.value[0]
        }
    })
  }, [axis, client])

  const handleChangeDebounced = useDebounceCallback(handleChange, 20)

  return (
    <Slider.Root
      min={MIN}
      max={MAX}
      step={STEP}
      defaultValue={[0.5]}
      className={classes.root}
      orientation={orientation}
      onValueChange={handleChangeDebounced}
    >
      {!!label && <Slider.Label className={classes.label}>{label}</Slider.Label>}
      <Slider.Control className={classes.control}>
        <Slider.Track className={classes.track}>
          <Slider.Range className={classes.range} />
        </Slider.Track>

        <Slider.Thumb index={0} className={classes.thumb}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};
