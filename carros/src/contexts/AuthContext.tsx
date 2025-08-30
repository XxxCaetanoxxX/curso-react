import { type ReactNode, createContext, useState, useEffect } from 'react';
import {auth} from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth';

interface AuthProviderProps {
    children: ReactNode
}

type AuthContextData = {
    signed: boolean;
    loading: boolean;
}

interface UserProps {
    uid: string;
    name: string | null;
    email: string | null;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                //tem usr logado
                setUser({
                    uid:user.uid,
                    name: user?.displayName,
                    email: user?.email
                })
                setLoadingAuth(false);
            } else{
                setUser(null)
                setLoadingAuth(false);

            }
        })
        return ()=>{
            unsub();
        }
    },[])

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                loading: loadingAuth
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;