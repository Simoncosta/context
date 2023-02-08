import { useContext } from "react";
import { UserContext } from "../context/user";

export default function Nome() {

    const { name, setName }: any = useContext(UserContext);

    return(
        <>
            <span>Bem vindo: {name}</span>
            <br />
            <button onClick={() => setName("Joaquim Costa")}>Trocar Nome</button>
        </>
    );
}