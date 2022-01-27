import { NavBar } from './components/NavBar';
import './App.css';
import {useState} from 'react';

function App() {

  const [drawThickness, setDrawThickness] = useState(5);
  const [drawColor, setDrawColor] = useState('black');
  const [drawStyle, setDrawStyle] = useState('solid');
  const [eraserOn, setEraserOn] = useState(false);


  return (
    <NavBar setDrawThickness={setDrawThickness} setDrawColor={setDrawColor} setDrawStyle={setDrawStyle} setEraserOn={setEraserOn} />
    // <Board drawThickness={drawThickness} drawColor={drawColor} drawStyle={drawStyle} eraserOn={eraserOn} />
  );
}

export default App;
