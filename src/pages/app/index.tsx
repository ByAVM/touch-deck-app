import { Box, Wrap } from "@styled-system/jsx";
import {
  ButtonControl,
  ButtonControlProps,
} from "@features/control/ui/ButtonControl";
import { Group } from "@shared/ui/Group";
import {
  SliderControl,
  SliderControlProps,
} from "@features/control/ui/SliderControl";
import { useSearchParams } from "react-router";
import { usePanel } from "@features/panels/hooks/usePanel";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { appMessages } from "./messages";
import { appPageRecipe } from "./style";
import { IconError404 } from "@tabler/icons-react";
import { glowIcon } from "@styled-system/patterns";
import { cx } from "@styled-system/css";

export const Dashboard = () => {
  const classes = appPageRecipe();

  const [searchParams] = useSearchParams({ path: "" });

  const panelPath = searchParams.get("path");

  const { loadPanel, currentPanel } = usePanel();

  useEffect(() => {
    loadPanel(panelPath ?? undefined);
  }, [loadPanel, panelPath]);

  if (!currentPanel) {
    return (
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" height="full">
        <IconError404 size={48} className={cx(classes.emptyIcon, glowIcon())} />
        <h2 className={classes.empty}>
          <FormattedMessage {...appMessages.emptyTitle} />
        </h2>
      </Box>
    );
  }

  return (
    <Wrap
      flexDirection={{
        base: "row",
      }}
      px="4"
      pt="6"
      paddingBottom="menu"
      gap="4"
      height="full"
      overflowX="auto"
    >
      {currentPanel.groups.map((group, i) => (
        <Group
          key={i}
          label={group.label}
          variant={group.variant}
          orientation={group.orientation}
        >
          {group.controls.map((control, i) => {
            switch (control.type) {
              case "button":
                return (
                  <ButtonControl key={i} {...(control as ButtonControlProps)} />
                );
              case "slider":
                return (
                  <SliderControl key={i} {...(control as SliderControlProps)} />
                );
            }
          })}
        </Group>
      ))}
    </Wrap>
  );
};
