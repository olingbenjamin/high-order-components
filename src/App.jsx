import Callback from "./components/Callback";
import Header from "./components/Header";
import Memo from "./components/Memo";

function App() {
  return (
    <>
      <Header name={"oling"} age={4} />
      <Memo />
      <Callback />
    </>
  );
}

export default App;
