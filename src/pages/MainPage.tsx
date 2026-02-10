import { toast } from "react-toastify";

const MainPage = () => {
    return (
      <>
        <h1>Főoldal</h1>
        <p>
          <a href="/new-pizza">Új pizza hozzáadása</a>
        </p>
        <p>
          <a href="/edit-pizza">Pizza szerkesztése</a>
        </p>
        <p>
          <a href="/all-pizza">Összes pizza</a>
        </p>
        <button onClick={() => {
          toast.success("Button pressed!");
        }}>Button</button>
      </>
    );
}
export default MainPage;