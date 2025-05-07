import { createContext, useContext } from "react";

export const GroupContext = createContext<{orientation?: 'horizontal' | 'vertical'}>({orientation: undefined})

export const useGroupContext = () => useContext(GroupContext)