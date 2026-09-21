import {useState, useRef} from 'react';
import Macguffin from './Macguffin';

function GameBoard({level}) {
  const [zoom, setZoom] = useState(1);
  const [pos,setPos] =useState({
    x: 0,
    y: 0
  });
  const isDragging = useRef(false);
  const lastMousePos = useRef({
    x: 0,
    y: 0
  });
  
//------------------
//---
//------------------ 
  function handleMouseDown(event) {
    isDragging.current = true;

    lastMousePos.current = {
        x: event.clientX,
        y: event.clientY
    };

  }

  function handleMouseMove(event) {
    if (!isDragging.current) {
      return;
    }
    const deltaX = event.clientX - lastMousePos.current.x;
    const deltaY = event.clientY - lastMousePos.current.y;

    setPos(previous =>({
      x: previous.x + deltaX,
      y: previous.y + deltaY
    }));
    lastMousePos.current = {
      x: event.clientX,
      y: event.clientY
    };
  }
  function handleMouseUp() {
    isDragging.current = false;
  }
  
  //------------------
  //---
  //------------------
  function handleWheel(event) {
    const zoomAmount = 0.1;

    setZoom(previous=>{
      let newZoom;

      if(event.deltaY < 0) {
        newZoom = previous + zoomAmount;
      } else {
        newZoom = previous - zoomAmount;
      }
      return Math.max(0.5, Math.min(newZoom, 3));
    })
  }
//------------------
//---
//------------------
    function handleClick(e) {
        if (e.target.classList.contains("game-item")) {
            console.log(`you found object ${e.target.dataset.id}`);
        }else{
            console.log("wrong object, try again");
        }        
    }
  
//------------------
//---
//------------------    
  return (
    <div
      className="game-viewport"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onClick={handleClick}
    >
      <div 
        className='game-board'  
        style={{
          width: `${level.width}px`,
          height: `${level.height}px`,
          transform: `
              translate(${pos.x}px, ${pos.y}px)
              scale(${zoom})
          `
        }}    
      >
        {level.items.map((object)=>(
          <Macguffin
              key={object.id}
              object={object}            
          />
        ))}
      </div>
    </div>
  )
}

export default GameBoard
