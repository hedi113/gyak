import { useState } from "react"
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";

const NewPizza = () => {
    const [nev, setNev] = useState<string>("");
    const [leiras, setLeiras] = useState<string>("");
    const [ar, setAr] = useState<number>(0.0);
    const [imageUrl, setImageUrl] = useState<string>(""); 

    const addPizza = () => {
        const p: Pizza = {
            nev,
            leiras,
            ar,
            imageUrl
        };

        if(p.ar < 1) {
            alert("Az ár nem lehet kevesebb mint 1 Ft!");
        }
        else {
            apiClient
                .post("/pizzak", p)
                .then((response) => alert(response.status))
                .catch((result) => console.error(result));
        }
    };

    return(<>
    <h1>Új pizza</h1>
    <div>
        <p>
            Név:
            <input type="text" onChange={(e) => setNev(e.target.value)} />
        </p>
        <p>
            Leírás:
            <input type="text" onChange={(e) => setLeiras(e.target.value)} />
        </p>
        <p>
            Ár:
            <input type="number" onChange={(e) => setAr(Number(e.target.value))} />
        </p>
        <p>
            ImageUrl:
            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
        </p>
    </div>
    <button onClick={addPizza}>Hozzáadás</button>
    </>);
};
export default NewPizza;