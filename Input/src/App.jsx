import "./App.css";
import { Input } from "./assets/components/Input";

function App() {
  return (
    <>
      <Input type="text" size="sm"/>
      <Input type="text" size="lg"/>
      <Input type="text" size="full"/>
      <Input type="text" disabled={'disabled'}/>


      <Input type="text"  color="error" />
    </>
  );
}

export default App;
