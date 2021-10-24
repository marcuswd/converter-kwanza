import './App.scss';
import Input from './Components/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Simulador de Transferências
      </header>

      <main>
          <Input dados={["Kwanza"]}></Input>
          <Input dados={["Dolar"]}></Input>
          <Input dados={["Euro"]}></Input>
      </main>
    </div>
  );
}

export default App;