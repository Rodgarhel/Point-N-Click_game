import levelBackground from '../assets/Level-01.png';

const level01 = {    
    id:1,
    name:"Level 01",
    width: 1920,
    height: 1080,
    background: levelBackground,
    items: [
        {
            id: 1,
            name: "trinket01",
            image: "src/assets/Bartender.png",
            x: 830,
            y: 460,
            width: 81,
            height: 87            
        },

        {
            id: 2,
            name: "trinket02",
            image: "src/assets/Bishop.png",
            x: 590,
            y: 740,
            width: 58,
            height: 86            
        },

        {
            id: 3,
            name: "trinket03",
            image: "src/assets/Dwarf01.png",
            x:250,
            y: 890,
            width: 52,
            height: 58            
        },
        {
            id: 4,
            name: "trinket04",
            image: "src/assets/Dwarf02.png",
            x: 1355,
            y: 968,
            width: 60,
            height: 71            
        },
        {
            id: 5,
            name: "trinket05",
            image: "src/assets/Guard_02.png",
            x: 1600,
            y: 110,
            width: 60,
            height: 95            
        },
        {
            id: 6,
            name: "trinket06",
            image: "src/assets/Guard_cpt.png",
            x: 755,
            y: 100,
            width: 48,
            height: 74            
        },
    ]
}

export default level01;