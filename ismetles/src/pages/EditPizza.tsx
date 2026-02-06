import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";

const EditPizza = () => {
    const [nev, setNev] = useState<string>("");
    const [leiras, setLeiras] = useState<string>("");
    const [ar, setAr] = useState<number>(0.0);
    const [imageUrl, setImageUrl] = useState<string>(""); 
    const {id} = useParams();

    useEffect(() => {
        apiClient
        .get(`/pizzak/${id}`)
        .then((response) => {
            setNev(response.data.nev ?? "");
            setLeiras(response.data.leiras ?? "");
            setAr(Number(response.data.ar) ?? "");
            setImageUrl(response.data.imageUrl ?? "");
        })
        .catch((result) => console.error(result));
    }, [id]);

    const editPizza = () => {
        const p: Pizza = {
            nev,
            leiras,
            ar,
            imageUrl
        };
        apiClient
        .put(`/pizzak/${id}`, p)
        .then((response) => alert(response.status))
        .catch((result) => console.error(result));
    }

    return (
      <>
        <h1>Pizza szerkesztése</h1>
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
            <input
              type="number"
              onChange={(e) => setAr(Number(e.target.value))}
            />
          </p>
          <p>
            ImageUrl:
            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
          </p>
        </div>
        <button onClick={editPizza}>Hozzáadás</button>
      </>
    );
}

export default EditPizza;