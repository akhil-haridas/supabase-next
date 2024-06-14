"use client";
import { User } from "@/types";
import { createContext, useContext, useState } from "react";

interface IAppContext {
    user: User | undefined;
}

const AppContext = createContext<IAppContext | undefined>(undefined)

export function AppWrapper({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<User | undefined>(undefined);

    return <AppContext.Provider value={{ user }}>
        {children}
    </AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext)
}