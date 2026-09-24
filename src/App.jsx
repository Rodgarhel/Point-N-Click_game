import './App.css'
import GameBoard from './components/GameBoard'
import GameScreen from './components/GameScreen';
import level01 from './JS/level-01';

function App() {
  return (
    <>
      {/* <GameBoard level={level01}/> */}
      <GameScreen level={level01}/>
    </>
  )
}

export default App
