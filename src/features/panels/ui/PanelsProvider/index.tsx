import { FC, PropsWithChildren, useState } from "react";
import { NavLink } from "react-router";
import { usePanelsList } from "../../hooks/usePanelsList";
import { IconMenu4 } from "@tabler/icons-react";
import { panelRecipe } from "./style";
import { FormattedMessage } from "react-intl";
import { panelsUiMessages } from "./messages";

export const PanelsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = panelRecipe({ open: isOpen });
  const panels = usePanelsList();

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className={classes.panel}>
        <ul>
          {panels.map((panel) => (
            <li key={panel.path}>
              <NavLink
                to={`/app?path=${panel.path}`}
                className={classes.item}
                onClick={handleClose}
              >
                {panel.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className={classes.backdropToggle} onClick={handleClose}>
          <FormattedMessage {...panelsUiMessages.closeButton}/>
        </button>
      </div>

      <button
        className={classes.toggle}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <IconMenu4 />
      </button>

      {children}

      <div className={classes.backdrop} onClick={handleClose} />
    </>
  );
};
