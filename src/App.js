import './App.scss';
import Transferwise from './Components/Cotacoes/Transferwise';
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

          <div className="taxas">
            <h2>Cotações</h2>
            <Transferwise moeda={["Euro"]}></Transferwise>
          </div>

          <div className="resumo-transferencia">
            <h3>Resumo Transferência</h3>
          </div>
      </main>
    </div>
  );
}

export default App;