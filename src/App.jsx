import Equation from './components/Equation';
import Operations from './components/Operations';
import Keyboard from './components/Keyboard';
import './App.css';

export default function App() {
  return (
    <div className="container">
    <section>
      <Operations/>
      <Equation/>
      <Keyboard/>
    </section>
    </div>
  )
}
