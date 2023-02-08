import { useContext } from "react";
import { UserContext } from "../context/user";
import Nome from "../Nome";

export default function Alunos() {

    const { idade }: any = useContext(UserContext);

    return(
        <>
            <h2>Componente Alunos: {idade}</h2>
            <Nome />
        </>
    );
}