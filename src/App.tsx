import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    fname: "PK",
    lname: "Ghosh",
  };

  return (
    <div>
      <Greet name="Probir" dayCount={2} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
