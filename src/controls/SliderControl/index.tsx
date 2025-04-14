import { Slider, SliderRootProps } from "@ark-ui/react";
import { sliderControlRecipe } from "./style";
import { FC } from "react";
import { Axis } from "../../types";
import { useClient } from "../../client/hooks/useClient";

const MAX = 1.0;
const MIN = 0.0;
const STEP = 0.02;

type SliderControlProps = Pick<SliderRootProps, "orientation"> & {
    label?: string,
    axis: Axis
};

export const SliderControl: FC<SliderControlProps> = ({ orientation, label, axis }) => {
  const classes = sliderControlRecipe({orientation});

  const client = useClient()
  const handleChange = (details: Slider.ValueChangeDetails) => {
    client.sendCommand({
        axis: {
            axis,
            value: details.value[0]
        }
    })
  }

  return (
    <Slider.Root
      min={MIN}
      max={MAX}
      step={STEP}
      defaultValue={[0.5]}
      className={classes.root}
      orientation={orientation}
      onValueChange={handleChange}
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
