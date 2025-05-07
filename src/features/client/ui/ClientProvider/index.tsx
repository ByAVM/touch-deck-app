import { FC, PropsWithChildren, useState } from "react";
import { useClientStore } from "../../model/store";
import { css } from "@styled-system/css";
import { Button } from "@shared/ui/Button";
import { Circle, VStack } from "@styled-system/jsx";
import { FormattedMessage } from "react-intl";
import { clientUiMessages } from "../messages";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const init = useClientStore((state) => state.init);
  const client = useClientStore((state) => state.client);
  const connected = useClientStore((state) => state.connected);
  const [ip, setIp] = useState('');

  const handleConnect = () => {
    init(ip);
  };
  if (!client) {
    return (
      <VStack width="full" height="full" justify="center">
        <h1
          className={css({
            fontSize: "4xl",
            color: "sky.500",
            textShadow: "0 0 4px var(--text-shadow-color)",
            textShadowColor: "sky.500",
            mb: 6,
          })}
        >
          <FormattedMessage {...clientUiMessages.heading} />
        </h1>

        <input
          className={css({
            colorPalette: 'sky',

            borderWidth: "2px",
            backgroundColor: "colorPalette.800/20",
            borderRadius: "sm",
            borderColor: "colorPalette.500",
            color: "colorPalette.500",
            px: 4,
            py: 2,
            textAlign: "center",
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'colorPalette.500',


            _focus: {
              outline: "none",
            },
          })}
          placeholder="Enter Server IP"
          type="text"
          value={ip}
          onChange={(e) => setIp(e.currentTarget.value)}
        />

        <Button onClick={handleConnect}>
          <FormattedMessage {...clientUiMessages.connectButton} />
        </Button>
      </VStack>
    );
  }

  if (client && !connected) {
    return (
      <VStack width="full" height="full" justify="center">
        <Circle size={12} animation={"ping"} bg="primary.10" />
        <h3
          className={css({
            fontSize: "lg",
            mt: 4,
          })}
        >
          <FormattedMessage {...clientUiMessages.connectionInProcess} />
        </h3>
      </VStack>
    );
  }

  return children;
};
