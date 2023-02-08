import { createContext, useState } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }: any) {

    const [name, setName] = useState("Simon");
    const [idade, setIdade] = useState("18");

    return(
        <UserContext.Provider value={{ name, setName, idade, setIdade }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;