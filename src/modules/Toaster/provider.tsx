import { Toast, toastAnatomy, Toaster } from "@ark-ui/react/toast";
import { FC, PropsWithChildren } from "react";
import { toaster } from "./toaster";
import { sva } from "@styled-system/css";

const toasterRecipe = sva({
  slots: toastAnatomy.keys(),
  base: {
    root: {
      backgroundColor: 'primary.10',
      color: 'white',
      p: 3
    }
  }
})
export const ToasterProvider: FC<PropsWithChildren> = ({children}) => {
  const classes = toasterRecipe()

  return (
    <>
      {children}
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id} className={classes.root}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
          </Toast.Root>
        )}
      </Toaster>
    </>
  );
};
