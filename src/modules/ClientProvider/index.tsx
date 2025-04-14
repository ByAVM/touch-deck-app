import { FC, PropsWithChildren, useState } from "react";
import { useClientStore } from "../../client/store";
import { css } from "@styled-system/css";
import { Button } from "../../components/Button";
import { Circle, VStack } from "@styled-system/jsx";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const init = useClientStore((state) => state.init);
  const client = useClientStore((state) => state.client);
  const setConnected = useClientStore((state) => state.setConnected);
  const connected = useClientStore((state) => state.connected);
  const [ip, setIp] = useState("192.168.1.54");

  const handleConnect = () => {
    init(ip, setConnected);
  };
  if (!client) {
    return (
      <VStack width="full" height="full" justify="center">
        <h1 className={css({
          fontSize: '4xl',
          mb: 6
        })}>Touch Deck</h1>

        <input
          className={css({
            borderWidth: "2px",
            backgroundColor: "primary.4",
            borderRadius: "sm",
            borderColor: "primary.10",
            color: "white",
            px: 4,
            py: 2,
            textAlign: 'center',

            _focus: {
              outline: "none",
            },
          })}
          placeholder="Enter Server IP"
          type="text"
          value={ip}
          onChange={(e) => setIp(e.currentTarget.value)}
        />

        <Button onClick={handleConnect}>Connect</Button>
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
          Connection..
        </h3>
      </VStack>
    );
  }

  return children;
};
