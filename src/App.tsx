import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      <Status status="success"/>
    </div>
  );
}

export default App;
