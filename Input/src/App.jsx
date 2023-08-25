import "./App.css";
import { Input } from "./assets/components/Input";

function App() {
  return (
    <>
      <Input type="text" label='sm' size="sm"/>
      <Input type="text" label='lg' size="lg"/>
      <Input type="text" label='full' size="full"/>
      <Input type="text" label='disabled' disabled={'disabled'}/>
      <Input type="text" label='focus' color="focus"/>
      <Input type="text"  label='error' color="error" />

      <Input type="text" label="Prueba de texto" helperText='Prueba de texto'/>
      <Input type="text"  label='Prueba de texto' helperText='Prueba de texto' color="error" />

      <Input type="text" typeIcon='starIcon' icon='shop' label='error' color="error" />

      <Input type="text" typeIcon='endIcon' icon='shop' label='error' color="error" />



    </>
  );
}

export default App;
