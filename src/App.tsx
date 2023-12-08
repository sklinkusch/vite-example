import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState<string>(new Date().toLocaleDateString("sv"));
  return (
    <div id="App">
      <input
        type="date"
        defaultValue={date}
        onChange={(e) => setDate(e.currentTarget.value)}
      />
    </div>
  );
}

export default App;
