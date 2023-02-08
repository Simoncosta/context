import Nome from "../NomeV1";

interface AlunosProps {
    name: string;
    setName: (setName: string) => void;
}

export default function Alunos({ name, setName }: AlunosProps) {
    return (
        <>
            <h2>Component Alunos</h2>
            <Nome nome={name} setName={setName} />
        </>
    )
}