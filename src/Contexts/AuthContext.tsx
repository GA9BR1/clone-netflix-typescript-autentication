import React, {createContext, ReactNode, useEffect, useState} from 'react'
import { IAuthProvider, IContext, IUser, } from './types'
import {useApi} from '../hook/useApi'

export const AuthContext = createContext<IContext>({} as IContext)

function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

function getUserLocalStorage () {
    const json = localStorage.getItem('u')

    if (!json){
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
}

const api = useApi();

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>(() => {
        return getUserLocalStorage();
    });

    async function authenticate(email: string, password: string) {
        const data = await api.signin(email, password);
        const payload = {token: data.token, email: email};
        setUser(payload);
        setUserLocalStorage(payload);

    }

    function logout () {
        setUser(null)
        localStorage.removeItem('u');
    }


    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
