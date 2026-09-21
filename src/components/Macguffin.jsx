
function Macguffin({object, onClick}) {
  const itemStyle = {
    left: `${object.x}px`,
    top: `${object.y}px`,
    width: `${object.width}px`,
    height: `${object.height}px`,
    backgroundColor: object.color
  }

  return (
    <div      
      className="game-item"
      data-id={object.id}
      style={itemStyle}
    ></div>
  )
}

export default Macguffin;
