import { useContext, createContext, useState } from "react";

const initialStates = {
  theme: "default",
  user: null,
  display: { name: "Dashboard", category: "" },
  setTheme: () => {},
  setUser: () => {},
  setDisplay: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState(initialStates.theme);
  const [user, setUser] = useState(initialStates.user);
  const [display, setDisplay] = useState(initialStates.display);

  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
        user,
        setUser,
        display,
        setDisplay,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

//use the Context to create Hooks like useTheme
export const useTheme = () => {
  const { theme, setTheme } = useContext(MyContext);
  return { theme, setTheme };
};

export const useUser = () => {
  const { user, setUser } = useContext(MyContext);
  return { user, setUser };
};

export const useDisplay = () => {
  const { display, setDisplay } = useContext(MyContext);
  return { display, setDisplay };
};
