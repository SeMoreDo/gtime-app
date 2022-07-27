import { createContext, useContext, ReactNode, useState } from "react";

type authContextType = {
    userData: Object;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    userData: {},
    login: (userData: any) => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [userData, setUser] = useState<Object>({});

    const login = (userData: any) => {
        setUser(userData);
    };

    const logout = () => {
        setUser({});
    };

    const value = {
        userData,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}