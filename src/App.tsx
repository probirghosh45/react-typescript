import './App.css';
import { Greet } from "./components/Greet";


function App() {
  return (
    <div>
      <Greet name ="Probir" dayCount={2} isLoggedIn={true}/>
    </div>
  );
}

export default App;
