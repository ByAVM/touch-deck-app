import { FC, MouseEventHandler, PropsWithChildren, TouchEventHandler } from "react";
import { useClient } from "../../client/hooks/useClient";
import { buttonControlRecipe, ButtonVariant } from "./style";

interface ButtonControlProps extends PropsWithChildren {
  id: number;
  delay?: number;
  showHelp?: boolean;
  help?: string;
}

const CLICK_DELAY = 50

export const ButtonControl: FC<ButtonControlProps & ButtonVariant> = ({ id, children, showHelp, help, variant, direction }) => {
  const classes = buttonControlRecipe({direction, variant})

  const client = useClient();

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault()

    client.sendCommand({
        button: {
          button: id,
          pressed: true,
        },
      });

      setTimeout(() => {
        client.sendCommand({
            button: {
              button: id,
              pressed: false,
            },
          });
      }, CLICK_DELAY)
  }

  const handleTouchStart: TouchEventHandler = (e) => {
    e.preventDefault()

    client.sendCommand({
      button: {
        button: id,
        pressed: true,
      },
    });
  };

  const handleTouchEnd: TouchEventHandler = (e) => {
    e.preventDefault()

    client.sendCommand({
      button: {
        button: id,
        pressed: false,
      },
    });
  };

  const helpText = help || `Button id: ${id}`
  
  return (
    <div
      className={classes.root}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <span className={classes.title}>{children}</span>
      {showHelp && <span className={classes.help}>{helpText}</span>}
    </div>
  );
};
