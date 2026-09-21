import './App.css'
import GameBoard from './components/GameBoard'
import level01 from './JS/level-01';

function App() {
  return (
    <>
      <GameBoard level={level01}/>
    </>
  )
}

export default App
