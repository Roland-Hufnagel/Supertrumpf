import './App.css';
import Card from './Card';
import Animal from './Animal';

function App() {
  const animal=new Animal('Elefant', "Elefant.jpeg", 3.3, 6000, 70, 1, 40)
  return (<>
    <h1>Supertrumpf</h1>
    <Card animal={animal} uncovered/></>
  );
}

export default App;
