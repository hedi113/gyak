import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";

const AllPizza = () => {
    const [pizza, setPizza] = useState<Pizza>();
    const { id } = useParams();

    useEffect(() => {
    apiClient
        .get(`/pizzak/${id}`)
        .then((response) => setPizza(response.data))
        .catch((result) => console.error(result));
    }, [id]);

    return (
      <>
        <h1>{pizza?.nev}</h1>
        <p>{pizza?.leiras}</p>
        <p>{pizza?.ar}</p>
        <img src={BACKEND_URL + "/kepek/" + pizza?.imageUrl}/>
      </>
    );
}

export default AllPizza;