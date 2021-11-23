import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default function Store({ children }) {
  const [uiState, setUiState] = useState({
    drawer: false,
    alert: false,
    dialog: false,
  });

  const store = {
    ui: [uiState, setUiState],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
