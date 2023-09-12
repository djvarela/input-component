import "./App.css";
import { Input } from "./assets/components/Input";

function App() {
  return (
    <>
      <Input type="text" label='sm' size="sm"/>
      <Input type="text" label='lg' size="lg"/>
      <Input type="text" label='full' size="full"/>
      <hr/>
      <Input type="text" label='disabled' disabled={'disabled'}/>
      <hr/>

      <Input type="text" label='focus' color="focus"/>
      <Input type="text"  label='error' color="error" />
      <hr/>


      <Input type="text" label="Prueba de texto" helperText='Prueba de texto'/>
      <Input type="text"  label='Prueba de texto' helperText='Prueba de texto' color="error" />
      <hr/>

      <Input type="text" typeIcon='starIcon' icon='phone' label='Error' color="error" />

      <Input type="text" typeIcon='endIcon' icon='phone' label='Error' color="error" />
      <hr/>
      <Input type="text" value="Text" label="Text" />
      <hr/>

      <Input type="text" multiline="true" label="Multiline" rows="10" />

    <p>Created by Diego Varela - <a href="https://devchallenges.io">devChallenges.io</a></p>
    </>
  );
}

export default App;
