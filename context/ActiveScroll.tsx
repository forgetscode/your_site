import * as React from "react";

interface ActiveScroll{
    setActiveScroll: React.Dispatch<React.SetStateAction<string>>;
    activeScroll: string
}

export const ActiveScrollContext = React.createContext<ActiveScroll>({
    setActiveScroll: () => {},
    activeScroll: "Home"
});

interface ActiveScrollContextProviderProps {
    children: React.ReactNode
}

export const ActiveScrollContextProvider = ({ children }:ActiveScrollContextProviderProps) => {
    const [activeScroll, setActiveScroll] = React.useState<string>("Home");

    return (
        <ActiveScrollContext.Provider value = {{ activeScroll, setActiveScroll }}>
            {children}
        </ActiveScrollContext.Provider>
    );
};

export const useScroll = () => React.useContext(ActiveScrollContext)