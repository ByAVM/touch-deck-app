import { Slider } from "@ark-ui/react";

const MAX = 1.0;
const MIN = 0.0;
const STEP = 0.02

export const GenericSlider = () => {
    return <Slider.Root min={MIN} max={MAX} step={STEP}>
        <Slider.Label>Label</Slider.Label>
        <Slider.ValueText/>
        <Slider.Control>
            <Slider.Track>
                <Slider.Range/>
            </Slider.Track>

            <Slider.Thumb index={0}>
                <Slider.HiddenInput/>
            </Slider.Thumb>
        </Slider.Control>
    </Slider.Root>
}