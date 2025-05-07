import { Toast as ArkToast, Toaster } from "@ark-ui/react/toast";
import { FC, PropsWithChildren, ReactNode } from "react";
import { toaster } from "../../model/toaster";
import { isMessageDescriptor } from "@shared/lib/isMessageDescriptor";
import { FormattedMessage, MessageDescriptor } from "react-intl";
import { toasterRecipe, toastRecipe } from "./style";
import {Options} from '@zag-js/toast';

export const Toast: FC<Options<ReactNode | MessageDescriptor>> = (toast) => {
  const type = toast.type && ['success', 'warning', 'error'].includes(toast.type) ? toast.type as 'success' | 'warning' | 'error' : 'default'
  const classes = toastRecipe({type: type});

  const title = isMessageDescriptor(toast.title) ? (
    <FormattedMessage {...toast.title} />
  ) : (
    toast.title
  );
  const description = isMessageDescriptor(toast.description) ? (
    <FormattedMessage {...toast.description} />
  ) : (
    toast.description
  );

  return (
    <ArkToast.Root
      key={toast.id}
      className={classes.root}
    >
      <ArkToast.Title className={classes.title}>{title}</ArkToast.Title>
      <ArkToast.Description className={classes.description}>
        {description}
      </ArkToast.Description>
    </ArkToast.Root>
  );
}

export const ToasterProvider: FC<PropsWithChildren> = ({ children }) => {
  const toasterClass = toasterRecipe();

  return (
    <>
      {children}
      <Toaster toaster={toaster} className={toasterClass}>
        {(toast) => <Toast {...toast} />}
      </Toaster>
    </>
  );
};
