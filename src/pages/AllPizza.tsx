import { useEffect, useState } from "react"
import type { Pizza } from "../types/Pizza"
import apiClient, { BACKEND_URL } from "../api/apiClient";

const AllPizza = () => {
    const [pizzak, setPizzak] = useState<Pizza[]>([]);
    useEffect(() => {
        apiClient
        .get("/pizzak")
        .then((response) => setPizzak(response.data))
        .catch((result) => console.error(result));
    }, []);
    return (
      <>
        {pizzak.map((p) => (
          <div>
            {p.nev}
            <img src={BACKEND_URL + "/kepek/" + p.imageUrl} width={200} />
          </div>
        ))}
      </>
    );
}

export default AllPizza;