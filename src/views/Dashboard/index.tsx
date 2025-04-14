import { Divider, Wrap, VStack } from "@styled-system/jsx";
import { ButtonControl } from "../../controls/ButtonControl";
import { Group } from "../../components/Group";
import { SliderControl } from "../../controls/SliderControl";
import { Axis } from "../../types";

export const Dashboard = () => {
  return (
    <Wrap
      direction={{
        base: "row",
      }}
      p="4"
      gap="4"
    >
      <Group flexDirection="column" label="Power">
        <ButtonControl showHelp help="toggle" variant="accent" id={1}>
          Power
        </ButtonControl>
        <ButtonControl showHelp help="toggle" variant="accent" id={2}>
          Engine
        </ButtonControl>
        <ButtonControl showHelp help="toggle" variant="accent" id={3}>
          Shields
        </ButtonControl>
        <ButtonControl showHelp help="toggle" variant="primary" id={4}>
          Lights
        </ButtonControl>
      </Group>
      <Group label="Flight" flexDirection="row">
        <VStack>
          <ButtonControl showHelp help="gear" variant="primary" id={5}>
            Landing
          </ButtonControl>
          <ButtonControl showHelp help="toggle" variant="primary" id={6}>
            VTOL
          </ButtonControl>
          <ButtonControl showHelp help="cycle" variant="primary" id={7}>
            MODE
          </ButtonControl>
        </VStack>

        <Divider
          orientation="vertical"
          borderColor="primary.4"
          thickness="2px"
        />

        <SliderControl
          orientation="vertical"
          label="Max Speed"
          axis={Axis.Slider}
        />
        <SliderControl
          orientation="vertical"
          label="Max Acceleration"
          axis={Axis.DialSlider}
        />
      </Group>

      <Group label="Comms">
        <ButtonControl variant="primary" id={8} help="request" showHelp>
          Landing
        </ButtonControl>
      </Group>
    </Wrap>
  );
};
