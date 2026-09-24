import {useState, useRef} from 'react';
import Macguffin from './Macguffin';

function GameScreen({ level }) {
    const [zoom, setZoom] = useState(1);
    const [camera, setCamera] = useState({
        x: level.width / 2,
        y: level.height / 2
    });

    const isDragging = useRef(false);
    const lastMousePos = useRef({
        x: 0,
        y: 0
    });

    //---------------
    // Handle Mouse
    //---------------
    function handleMouseDown(event) {
        isDragging.current = true;

        lastMousePos.current = {
            x: event.clientX,
            y: event.clientY
        };
    }

    function handleMouseMove(event) {
        if (!isDragging.current) {return}

        const deltaX = event.clientX - lastMousePos.current.x;
        const deltaY = event.clientY - lastMousePos.current.y;

        setCamera(previous => {

            // Convert screen movement into map movement.
            const moveX = deltaX / zoom;
            const moveY = deltaY / zoom;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // How much of the map must remain
            // between the camera and the edges.
            const limitX = viewportWidth / (2 * zoom);

            const limitY = viewportHeight / (2 * zoom);

            const minX = limitX;
            const maxX = level.width - limitX;

            const minY = limitY;
            const maxY = level.height - limitY;

            const newX = previous.x - moveX;
            const newY = previous.y - moveY;

            return {
                x: Math.max(minX,Math.min(newX, maxX)),
                y: Math.max(minY,Math.min(newY, maxY))
            };
        });        
        lastMousePos.current = {
            x: event.clientX,
            y: event.clientY
        };
    }    

    function handleMouseUp() {
    isDragging.current = false;
    }
    
    //------------------
    //--- Handle Screen Zoom
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
            return Math.max(0.75, Math.min(newZoom, 2));
        })
    } 

    const offsetX = window.innerWidth / 2 - camera.x * zoom;
    const offsetY = window.innerHeight / 2 - camera.y * zoom;      

    return (
        <div
            className="game-viewport"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
        >
            <div
                className="game-screen"
                style={{
                    width: `${level.width}px`,
                    height: `${level.height}px`,
                    backgroundImage: `url(${level.background})`,
                    transform: `
                        translate(${offsetX}px, ${offsetY}px)
                        scale(${zoom})
                    `
                }}
            >
                {level.items.map(object => (
                    <Macguffin
                        key={object.id}
                        object={object}
                    />
                ))}
            </div>
        </div>
    );
};
    export default GameScreen;