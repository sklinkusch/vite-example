import { useDebugState } from "use-named-state";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [name, setName] = useDebugState<string>("name", "");
  const [date, setDate] = useDebugState<string>(
    "date",
    new Date().toLocaleDateString("sv")
  );
  return (
    <div id="App">
      <Form name={name} setName={setName} date={date} setDate={setDate} />
    </div>
  );
}

export default App;
