import { FC, MouseEventHandler, TouchEventHandler } from "react";
import { useClient } from "@features/client/hooks/useClient";
import { buttonControlRecipe, ButtonVariant } from "./style";
import { Control } from "@shared/types";
import { useGroupContext } from "@shared/model/GroupContext";

export interface ButtonControlProps extends Control {
  id: number;
  delay?: number;
  label?: string;
  showHelp?: boolean;
  help?: string;
}

const CLICK_DELAY = 50

export const ButtonControl: FC<ButtonControlProps & ButtonVariant> = ({ id, label, showHelp, help, variant, direction, delay = CLICK_DELAY }) => {
  const {orientation: groupOrientation} = useGroupContext()
  const classes = buttonControlRecipe({direction, variant, fullWidth: groupOrientation === 'vertical'})
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
      }, delay)
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
      <span className={classes.title}>{label}</span>
      {showHelp && <span className={classes.help}>{helpText}</span>}
    </div>
  );
};
