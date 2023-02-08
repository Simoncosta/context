import Alunos from "./Alunos";

import UserProvider from "./context/user";

function App() {
    return(
        <UserProvider>
            <>
                <h1>Escola</h1>
                <Titulo>
                    <h1>BEM VINDO A ESCOLA</h1>
                </Titulo>
                <hr />
                <Alunos/>
            </>
        </UserProvider>
    );
}

export default App;

function Titulo({ children }: any) {
    return(
        <>
            {children}
        </>
    );
}