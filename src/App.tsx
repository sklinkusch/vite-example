import { useDebugState } from "use-named-state";
import Form from "./components/Form/Form";
import "./App.css";
import { useEffect } from "react";
import MessageField from "./components/MessageField/MessageField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FetchField from "./components/FetchField/FetchField";

const theme = createTheme({});

function App() {
  const [name, setName] = useDebugState<string>("name", "");
  const [date, setDate] = useDebugState<string>(
    "date",
    new Date().toLocaleDateString("sv")
  );
  const [text, setText] = useDebugState<string>("text", "");
  useEffect(() => {
    if (name.length) {
      const messageText = `${name} was born on ${new Date(
        date
      ).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      })}.`;
      setText(messageText);
    } else {
      setText("");
    }
  }, [date, name, setText]);
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        <Form name={name} setName={setName} date={date} setDate={setDate} />
        <MessageField text={text} />
        <FetchField />
      </div>
    </ThemeProvider>
  );
}

export default App;
