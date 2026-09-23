
function Macguffin({object, onClick}) {
  const itemStyle = {
    left: `${object.x}px`,
    top: `${object.y}px`,
    width: `${object.width}px`,
    height: `${object.height}px`    
  }

  return (    
    <img
    className="game-item"
    data-id={object.id}
    style={itemStyle}   
    src={object.image}
    alt={object.name}
    />    
  )
}

export default Macguffin;
