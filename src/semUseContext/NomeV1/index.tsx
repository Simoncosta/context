interface NomeProps {
    nome: string;
    setName: (setName: string) => void;
}

export default function Nome({ nome, setName }: NomeProps) {

    return(
        <>
            <span>Bem vindo {nome}</span>
            <br />
            <button onClick={() => setName("Joaquim Costa")}>Trocar Nome</button>
        </>
    );
}