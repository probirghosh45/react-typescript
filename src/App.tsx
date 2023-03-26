import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    fname: "PK",
    lname: "Ghosh",
  };

  const list = [
    { fname: "Shakib", lname: "AL Hasan" },
    { fname: "Tamim", lname: "Iqbal" },
    { fname: "Masrafee", lname: "Mortaza" },
  ];

  return (
    <div>
      <Greet name="Probir" dayCount={2} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={list}/>
    </div>
  );
}

export default App;
